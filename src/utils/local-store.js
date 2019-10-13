/**
 * 设置localStore
 * @param {*} storeName 存储名称
 * @param {*} userInfo 存储值
 */
const setStore = (storeName, userInfo) => {
  localStorage[storeName] = JSON.stringify(userInfo)
}

/**
 * 获取localStore
 * @param {*} storeName 存储名称
 */
const getStore = (storeName) => {
  const store = localStorage[storeName] || '{}'

  return JSON.parse(store)
}

/**
 * 删除localStore
 * @param {*} storeName 存储名称
 */
const removeStore = (storeName) => {
  localStorage.removeItem(storeName)
}

export default {
  getStore,
  setStore,
  removeStore
}
