export function isValidUserName(str) {
  const usernameMap = ['admin', 'lizhiqiang']
  return usernameMap.indexOf(str.trim()) >= 0
}

export function isValidPassword(str) {
  const passwordMap = ['password']
  return passwordMap.indexOf(str.trim()) >= 0
}
