let redis = require('redis');
let whiteBird = require('../whitebird');

let redisAsync = whiteBird.promisifyAll(redis.RedisClient.prototype);
export default redis
