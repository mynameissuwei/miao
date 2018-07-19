var mynameissuwei = function() {
  function chunk (array, size = 1) {
    var array1 = []
    array1.push(array.slice(0,size),array.slice(size))
    return array1
  }

  function compact (array) {
    return array.filter(x => x)
  }

  function concat (array,...items) {
    for(var value of items) {
      if(Array.isArray(value)) array.push(...value)
        else array.push(value)
    }
    return array
  }

  function reverse (array) {
    var last = array.length - 1
    for (var i = 0; i < last / 2; i++) {
      [array[i],array[last - i]] = [array[last - i],array[i]]
    }
    return array
  }

  function slice (array,start = 0, end = array.length - 1) {
    var res = []
    for(start = 0; start <= end; start++) {
      res.push(array[start])
    }
    return res
  }

  function filter(ary, test) {
    return ary.reduce((result, item, index, ary) => {
      if (test(item, index, ary)) {
        result.push(item)
      }
      return result
    }, [])
  }

  function map(array, mapper) {
    return array.reduce(function(result, item, index, ary) {
      result.push(mapper(item, index, ary))
      return result
    }, [])
  }

  function flatten(ary) {
    var result = []

    for(var i = 0; i<ary.length; i++) {
      if (!Array.isArray(ary[i])) {
        result.push(ary[i])
      } else {
        for(var j = 0;j<ary[i].length;j++) {
          result.push(ary[i][j])
        }
      }
    }

    return result
  }

  function indexOf(array,value,fromindex = 0) {
    if(fromindex < 0)  fromindex = fromindex + array.length 
    for(i = fromindex; i < array.length; i++) {
      if(array[i] == value) {
        return  i
      }
    }
    return -1 
  }

  function isArray(arr) {
    return Object.prototype.toString.call(arr) == "[object Array]" 
  }

  function isDate(value) {
    return Object.prototype.toString.call(value) == "[object Date]" 
  }

  function isBoolean(value) {
    return Object.prototype.toString.call(value) == "[object Boolean]" 
  }

  function isString(value) {
    return Object.prototype.toString.call(value) == "[object String]" 
  }

  function isNumber(value) {
    return Object.prototype.toString.call(value) == "[object Number   ]"
  }

  return {
    chunk:chunk,
    compact:compact,
    concat:concat,
    reverse:reverse,
    slice:slice,
    filter:filter,
    map:map,
    flatten:flatten,
    indexOf:indexOf,
    isArray:isArray,
    isDate:isDate,
    isBoolean:isBoolean,
    isString:isString,
    isNumber:isNumber,
  }
}()
