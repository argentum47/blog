'use strict';

var redis = require('../db/redis');
var bcrypt = require('bcrypt-nodejs');
var wB = require('../whitebird');

let DB_NAME = 'USER';
let NEXT_USER_ID = 'NEXT_USER_ID';
let USER_IDS = 'USER_IDS';

((redis) => {
  let $r = redis.createClient();
  $r.getAsync(NEXT_USER_ID)
  .then(res => {
      if(isNaN(+res) || +res == 0) {
        return $r.setAsync([NEXT_USER_ID, 1])
      } else {
        return $r
      }

  })
  .done(() => $r.quit())
})(redis)

var User = {
  find: function(user, cb) {
    let $r = redis.createClient();
    if(!user.name) {
      cb(Error("INVALID_DATA"));
    } else {
      $r.hgetallAsync(`user:${user.name}`)
        .then( res => {
          if(!res) cb(Error("RECORD_NOT_FOUND"));
          else {
            if(bcrypt.compareSync(user.password, res.hash))
              cb(null, {id: res.id, name: res.name, provider: { name: res.provider, id: res.providerId, data: res.providerData } })
            else
              cb(Error("RECORD_NOT_FOUND"));
          }
        })
    }
  },

  getById: function(id, cb) {
    let $r = redis.createClient();
    if(!id) {
      cb(Error("INVALID_DATA"));
    } else {
      $r.getAsync(`user:${id}`)
        .then( res => {
          if(!res) cb(Error("RECORD_NOT_FOUND"));
          else {
            cb(null, res)
          }
        })
    }
  },

  create: function(user, cb) {
    let $r = redis.createClient();
    if(!user.name || !user.password) {
      cb(Error("INVALID DATA"));
    } else {
      this.find(user, function(err, data) {
        if(err) {
          if(err.message === 'RECORD_NOT_FOUND') {
            $r.getAsync(NEXT_USER_ID)
              .then(id => {
                user.id = id;
                return $r.hmsetAsync([`user:${user.name}`, 'id', id, 'name', user.name, 'hash', bcrypt.hashSync(user.password), 'provider', user.provider, 'providerId', user.providerId, 'providerData', JSON.stringify(user.providerData)])
              })
              .then(status => {
                if(status === 'OK') {
                  console.log("userCreated");
                  return Promise.all( [$r.msetAsync([ NEXT_USER_ID, (+user.id) + 1, `user:${user.id}`, user.name ]), $r.lpushAsync([USER_IDS, (+user.id)])] )
                } else {
                  throw Error()
                }
              })
              .then(_ => cb(null, {id: user.id, name: user.name}))
              .catch(err => cb(Error("SERVER_ERROR")))
              .done(_ => $r.quit())
          } else {
            cb(Error("SERVER_ERROR"))
          }
        } else {
          cb(Error("RECORD_EXISTS"))
        }
      })
    }
  }
}

module.exports = wB.promisifyAll(User)
