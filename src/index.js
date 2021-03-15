module.exports = function check(str, bracketsConfig) {
  let res = [];
  let conf = bracketsConfig;
  // use cycle for or forEach+join()
  for (let i = 0; i < conf.length; i++) {
    res.push(conf[i][0] + conf[i][1]);
  }
  // remove brackets from res
  for (let j = 0; j < str.length; j++) {
    if (str.includes(res[j])) {
      str = str.replace(res[j], "");
      j = -99;
    }
  }
  return !str;
}
