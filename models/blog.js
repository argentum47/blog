import redis from '../db/redis';
import * as db from '../db/blogs';

let {DB_NAME, BLOG_IDS, NEXT_BLOG_ID} = db;

((redis) => {
  let $r = redis.createClient();
  $r.getAsync(NEXT_BLOG_ID)
  .then(res => {
      if(isNaN(+res) || +res == 0) {
        return $r.setAsync([NEXT_BLOG_ID, 1])
      } else {
        return $r
      }

  })
  .done(() => $r.quit())
})(redis)


var Blog =  {
  create: function(blog, cb) {
    let $r = redis.createClient();
    if(!(blog || blog.title)) {
      cb(Error("INVALID_DATA"))
    } else {
      $r.getAsync(NEXT_BLOG_ID)
        .then( id => {
          blog.id = id;
          return $r.hmsetAsync([`id:${id}`, 'id', id, 'title', blog.title, 'content', blog.content])
        })
        .then( status => {
          if(status === 'OK') {
            console.log("lbog", blog.id)
            $r.setAsync([NEXT_BLOG_ID, (+blog.id) + 1])
            $r.lpushAsync([BLOG_IDS, (+blog.id)])
            cb(null,  blog);
          } else {
            cb(Error("SERVER_ERROR"))
          }
        })
        .catch(() => cb(Error("SERVER_ERROR")))
        .done(() => $r.quit())
    }
  },

  getById: function(id, cb) {
    let $r = redis.createClient();
    if(!id) {
      cb(Error("INVALID_DATA"))
    } else {
      $r.hgetallAsync(`id:${id}`)
        .then( res => {
          if(!res) cb(Error("RECORD_NOT"))
          else cb(null, res)
        })
        .catch(() => cb(Error("SERVER_ERROR")))
        .done(() => $r.quit())
    }
  },

  all: function(noob, cb) {
    let blogs = [];
    let $r = redis.createClient();
    $r.lrangeAsync([BLOG_IDS, 0, -1])
      .then( ids => {
        console.log(ids);
        return ids.map( id => $r.hgetallAsync(`id:${id}`) )
      })
      .then(res => {
        Promise.all(res.map( r => r.then(b => blogs.push(b)) )).then( p => cb(null, blogs))
      })
      .catch(() => cb("SERVER_ERROR"))
      .done(() => $r.quit())
  }
}


module.exports = Blog
