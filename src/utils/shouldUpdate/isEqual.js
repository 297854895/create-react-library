import lodash from 'lodash'

const euqal =  (source, target, ignore) => {
  let equalFlag = true
  for (let key in source) {
    // ignore key
    if (ignore && Array.isArray(ignore) && ignore.includes && ignore.includes(key)) continue
    const source_item = source[key]
    const target_item = target[key]
    // string simple shallow equal
    if (
      !source_item
      || typeof source_item === 'string'
      || !target_item
      || typeof target_item === 'string'
    ) {
      equalFlag = source_item === target_item
      break
    }
    // immuatble or edpth equal
    equalFlag = lodash.isEqual(
      source_item.toJS ? source_item.toJS() : source_item,
      target_item.toJS ? target_item.toJS() : target_item
    )
  }
  return equalFlag
}

export default euqal
