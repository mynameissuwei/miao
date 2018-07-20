var mynameissuwei = functxdion() {

  // purpose ! you need to know how to use these function
  
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
    return Object.prototype.toString.call(value) == "[object Number]"
  }

  function isUndefined(value) {
    return Object.prototype.toString.call(value) == "[object Undefined]"
  }

  function drop(arr,n = 1) {
    return arr.slice(n)
  }

  function dropRight(array,n = 1) {
    var len = array.length - n
    if(len <= 0) {
      len = 0
    }
    array.splice(len,n)
    return array
  }

  function fill(array,value,start = 0,end = array.length) {
    for(i = start; i < end; i++) {
      array[i] = value
    }
    return array          
  }

  function isInteger(value) {
    return Number.isInteger(value)
  }

  function isRegExp(value) {
    return Object.prototype.toString.call(value) == "[object Array]"
  }

  //isNaN(undefined) == true . delete this situation
  function isNaN(value) {
    return Object.prototype.toString.call(value) == "[object Number]" && isNaN(value)
  }

  function isNull(value) {
    return Object.prototype.toString.call(value) == "[object Null]"
  }

  //Checks if value is null or undefined
  function isNil(value) {
    return Object.prototype.toString.call(value) == "[object Null]" || Object.prototype.toString.call(value) == "[object Undefined]"
  }

  //null也属于object 判断该值不是Null 但是object
  function isObjectLike(value) {
    return Object.prototype.toString.call(value) !== "[object Null]" && typeof value == "object"
  }

  //isSafeInteger 判断该数为整数而且在最大整数和最小整数之间
  function isSafeInteger(value) {
    return isInteger(value) && value <= Number.MAX_SAFE_INTEGE && value >= Number.MIN_SAFE_INTEGE
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
    drop:drop,
    dropRight:dropRight,
    fill:fill,
    isInteger:isInteger,
    isUndefined:isUndefined,
    isRegExp:isRegExp,
    isNaN:isNaN,
    isNull:isNull,
    isObjectLike:isObjectLike,
    isSafeInteger:isSafeInteger,
  }
}()
