const async = require(`async`);

const fs = require(`fs`);

async.parallel({
  bufA: function (callback) {
    fs.readFile(`tmp/a.txt`, `utf8`, callback);
  },
  bufB: callback => {
    fs.readFile(`tmp/b.txt`, `utf8`, callback);
  },
  bufC: callback => {
    fs.readFile(`tmp/c.txt`, `utf8`, callback);
  }
}, function (e, result) {
  console.log(result.bufA);
  console.log(result.bufB);
  console.log(result.bufC);
})
