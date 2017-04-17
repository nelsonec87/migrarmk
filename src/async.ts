import async = require('async');

async.eachSeries([4, 3, 2, 1,], (i, cb) => {
    setTimeout(() => { console.log(i); cb(null, i)  }, 1000 * i);
})