import Axios from './http'

/**
 * 获取标签列表
 * @param {Object} formDate
 */
const getLabelList = formDate => Axios.post('/growing/label/list', formDate)

export default {
  getLabelList,
}
