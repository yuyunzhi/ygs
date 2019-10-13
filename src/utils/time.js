const formatTime = (mills, accuracy) => {
  let time

  if (typeof mills === 'number') {
    time = new Date(mills)
  } else if (mills.constructor === Date) {
    time = mills
  }

  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let date = time.getDate()
  let hour = time.getHours()
  let min = time.getMinutes()
  let sec = time.getSeconds()
  let accuracyArr = []

  switch (accuracy) {
    case 'sec':
      accuracyArr = [hour, min, sec]
      break
    case 'hour':
      accuracyArr = [hour]
      break
    default:
      accuracyArr = [hour, min]
  }

  let dateStr = [year, month, date].map(n => {
    return n < 10 ? '0' + n : '' + n
  }).join('-')
  let timeStr = accuracyArr.map(n => {
    return n < 10 ? '0' + n : '' + n
  }).join(':')

  let dateTimeStr = `${dateStr} ${timeStr}`

  return {
    dateStr,
    timeStr,
    dateTimeStr
  }
}

export default formatTime
