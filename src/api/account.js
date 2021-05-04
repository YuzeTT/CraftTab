import md5 from 'js-md5';

/**
 * 
 * @param {String} username 用户名
 * @param {String} password 密码
 * @returns {String}
 */
function login (username, password) {
  // let status = "ok," + username + "," + password
  // return status
  let token = createToken(username, password)
  let vt = verifyToken(token)
  console.log(vt)
  if (vt.code == 200) {
    writeToken(token, username)
    // this.$router.replace('/')
    // this.loginResult.success = true
    // this.loginResult.error = false
  }
  return vt.code
}

/**
 * 
 * @param {String} username 用户名
 * @param {String} password 密码
 * @returns {String}
 */
function createToken (username, password) {
  console.log('---------- MD5 ----------')
  console.log('加密前: ' + username + password)
  let token = md5(md5(username + password) + 'CrTabKEY')
  console.log('加密后: ' + token)
  return token
}

function verifyToken (token) {
  let rs = {
    'statusCode': 200,
    'code': 0,
    'status': '请求失败',
    'loginDate': 'nul;',
    'username': 'null'
  }
  switch (token) {
    case '0':
      rs.code = -1
      rs = { code: 502, status: '内部服务器错误，请重试！', loginDate: new Date().getTime() }
      break
    case '5de03417f3630ff5ca460f1885166192':
      rs = { code: 200, status: '登录成功！', loginDate: new Date().getTime(), username: 'YuzeTT' }
      break
    case 'dea747c880ecc2b0465a4aa434d39834':
      rs = { code: 200, status: '登录成功！', loginDate: new Date().getTime(), username: 'Player' }
      break
    default:
      rs = { code: -2, status: '账户未注册或账号密码错误！', loginDate: new Date().getTime() }
      break
  }
  return rs
}

function writeToken (token, username) {
  console.log('---------- 写入token ----------')
  localStorage.setItem('token', token);
  localStorage.setItem('username', username);
}

export { login, verifyToken }