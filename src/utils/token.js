import Cookies from 'js-cookie'

const DEFAULT_TOKEN_KEY = 'User-Token'

export function getToken() {
  return Cookies.get(DEFAULT_TOKEN_KEY)
}

export function setToken(token) {
  Cookies.set(DEFAULT_TOKEN_KEY, token)
}

export function removeToken() {
  Cookies.remove(DEFAULT_TOKEN_KEY)
}
