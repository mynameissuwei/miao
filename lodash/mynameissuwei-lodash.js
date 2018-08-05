var mynameissuwei = function(){
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

  function flatten(ary){
    return [].concat(...ary)
  }

  function flattenDepth(array,depth) {
   for(i = 0; i < depth; i++) {
     array  = flatten(array)
   }
   return array
  }

  function flattenDeep(arr) {
     return arr.toString("").split(",").map(it => Number(it))
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
  
  //Checks if value is classified as a String primitive or object.
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
    return Object.prototype.toString.call(value) == "[object RegExp]"
  }

  //isNaN(undefined) == true . delete this situation
  function isNaN(value) {
      if (value == undefined)return false
      return Number.isNaN(Number(value))
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
    return Number.isSafeInteger(value)
  }

  function fromPairs(array) {
    var array = flatten(array)
    var  map = {}
    for(i = 0; i < array.length; i = i + 2) {
      map[array[i]] = array[i + 1]
    }
    return map
  }

  function head(array) {
    return array[0]
  }

  function last(array) {
    return array[array.length - 1]
  }

  function unary(f) {
    return function(value) {
      return f(value)
    }
  }

  function identity(v) {
    return v
  }

  function lt(value1,value2) {
    if(value1 < value2) return true
      else return false
  }

  function lte(value1,value2) {
    if(value1 <= value2) return true
      else return false
  }
    
  function toArray(value) {
    if( !isNil(value) && isArrayLike (value) || isObjectLike (value )) return Object.values(value)
      else return []
   }   

  function isArrayLike(value) {
    if (value.hasOwnProperty('length') && typeof value  !== 'function')  return  true
     else  return false
  }
  
 function toFinite(value) {
    if (value === Infinity) return Number.MAX_VALUE
    if (value === -Infinity) return Number.MIN_VALUE
    let result = Number(value)
    return isNaN(result) ? 0 : result
  }

 function isArguments(value) {
     return Object.prototype.toString.call(value) === '[object Arguments]'
 }

 function isArrayBuffer(value) {
     return Object.prototype.toString.call(value) === '[object ArrayBuffer]'
 }

 function gt(value,other) {
  if(value > other) return true
    else return false
 }

 function gte(value,other) {
  if(value >= other) return true
    else return false
 }

 function eq(value,other) {
   return Object.is(value,other)
 }

 function isArrayLikeObject(value) {
  return isArrayLike(value) && isObjectLike(value)
 }

 function isElement(value) {
  return value instanceof Element
 }

 function isError(value) {
  return value instanceof Error
 }

 function isFinite(value) {
  return Number.isFinite(value)
 }

 function isLength(value) {
  return Number.isSafeInteger(value) && value >= 0
 }

 function isMap(value) {
  return Object.prototype.toString.call(value) == '[object Map]'
 }

 function isObject(value) {
  return value !== null && typeof value == 'object' || typeof value == 'function'
 }

 function isNative(value) {
  return value.toString().includes('[native code]')
 }

 function isSet(value) {
  return Object.prototype.toString.call(value) == '[object Set]'
 }

 //Checks if value is classified as a Symbol primitive or object.
 function isSymbol(value) {
  return Object.prototype.toString.call(value) == '[object Symbol]' || typeof value == 'object'
 }

 function isWeakMap(value) {
  return Object.prototype.toString.call(value) == '[object WeakMap]'
 }

 function isWeakSet(value) {
  return Object.prototype.toString.call(value) == '[object WeakSet]'
 }

 function toNumber(value) {
  return Number(value)
 }

 function add(a,b) {
  return a + b
 }

 function divide(a,b) {
  return a / b
 }

 function max(array) {
   if(!array.length) return undefined
     else return array.reduce((initialValue,item) => initialValue = item > initialValue ? item : initialValue  ,initialValue = -Infinity)
 }

 function mean(array) {
  var len = array.length
  var sum = 0
  for(i = 0; i < array.length; i++) {
    sum = array[i] + sum
  }
  return sum / len
 }

 function min(array) {
   if(!array.length) return undefined
     else return array.reduce((initialValue,item) => initialValue = item < initialValue ? item : initialValue  ,initialValue = Infinity)
 }

 function multiply(multiplier, multiplicand) {
  return multiplier * multiplicand
 }

 function round(number, precision = 0) {
   var digit = Math.pow(10, precision)
   return Math.round(number * digit) / digit
 }

 function ceil(number,precision = 0) {
  var digit = Math.pow(10,precision)
  return Math.ceil(number * digit) / digit
 }

 function floor(number,precision = 0) {
  var digit = Math.pow(10,precision)
  return Math.floor(number * digit) / digit
 }

 function subtract(minuend, subtrahend) {
  return minuend * subtrahend
 }

 function sum(array) {
  return array.reduce((initialValue,item) => initialValue = initialValue + item , initialValue = 0)
 }

 function join(array,char) {
   var char = char.toString()
   var result = array[0] || ""
   var len = array.length
   for(i = 1; i < array.length; i++) {
     result = result + (char + array[i])
   }
   return result
 }

 function lastIndexOf(array,value,fromindex = array.length - 1) {
  for(i = fromindex; i >= 0; i--) {
   if(array[i] == value) {
      return i
    }
  }
  return -1
 }

 function nth(array,n = 0) {
  if(n >= 0) {
    return array[n]
  }
  if(n < 0) {
    return array[array.length + n]
  }
 }

 function pull(array,...values) {
   for(i = 0; i < array.length; i++) {
     if(values.includes(array[i])) {
       array.splice(i,1)
       i--
     }
   }
   return array
 }

 function pullAll(array,values) {
   for(i = 0; i < array.length; i++) {
     if(values.includes(array[i])) {
       array.splice(i,1)
       i--
     }
   }
   return array
 }

 // function sortedIndex(array,value) {
 //  if(value < array[0]) {
 //    return 0
 //  }
 //  for(i = 0 ; i < array.length - 1; i++) {
 //    if( array[i] < value && value <= array[i + 1]) return array[i + 1]
 //  }
 // }

 function sortedIndex(array,value) {
   var low = 0 
   var high = array.length - 1
   while(low <= high) {
     var mid = Math.floor ( (low + high) / 2 )
     if(array[mid] < value) {
       low = mid + 1
     } else {
       high = mid - 1
     } 
   }
   return low
 }

 function sortedIndexOf(array,value) {
   var index = sortedIndex(array,value)
   return array[index] == value ? index : -1
 }

 function sortedLastIndex(array,value) {
   var low = 0
   var high = array.length - 1
   while(low <= high) {
     var mid =  Math.round((low + high) / 2)
     if(array[mid] <= value) {
       low = mid + 1
     } else {
       high = mid - 1
     }
   }
   return high + 1
 }

 function sortedLastIndexOf(array,value) {
  return sortedLastIndex(array,value) - 1
 }

 function sortedUniq(array) {
  return Array.from(new Set(array))
 }

 function tail(array) {
  return array.slice(1)
 }

 function take(array,n = 1) {
   return array.slice(0,n)
 }

 function takeRight(array, n = 1) {
   var ary = []
   for(i = 0; i < n; i++) {
     ary.push(array[array.length - (i + 1)])
   }
   ary.sort((a,b) => a - b)
   return ary.filter(item => item !== undefined)
 }

 function union(...array) {
   return uniq(flatten(array))
 }

 function uniq(array) {
  return Array.from(new Set(array))
 }

 //Creates an array excluding all given values using SameValueZero for equality comparisons.
 function without(array,...value) {
   var ary = []
   array.forEach(it => {if(!value.includes(it))  ary.push(it)})
   return ary
 }

            
  return {
    chunk:chunk,
    compact:compact,
    concat:concat,
    reverse:reverse,
    slice:slice,
    filter:filter,
    map:map,
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
    flattenDepth:flattenDepth,
    flattenDeep:flattenDeep,
    flatten:flatten,
    fromPairs:fromPairs,
    head:head,
    last:last,
    unary:unary,
    identity:identity,
    lt:lt,
    lte:lte,
    toArray:toArray,
    isArrayLike:isArrayLike,
    toFinite:toFinite,
    isArguments:isArguments,
    isArrayBuffer:isArrayBuffer,
    gt:gt,
    eq:eq,
    gte:gte,
    isArrayLikeObject:isArrayLikeObject,
    isElement:isElement,
    isError:isError,
    isFinite:isFinite,
    isLength:isLength,
    isMap:isMap,
    isObject:isObject,
    isNative:isNative,
    isSet:isSet,
    isSymbol:isSymbol,
    toNumber:toNumber,
    add:add,
    divide:divide,
    max:max,
    mean:mean,
    min:min,
    multiply:multiply,
    round:round,
    ceil:ceil,
    floor:floor,
    isWeakSet:isWeakSet,
    isWeakMap:isWeakMap,
    sum:sum,
    join:join,
    lastIndexOf:lastIndexOf,
    nth:nth,
    pull:pull,
    pullAll:pullAll,
    sortedIndex:sortedIndex,
    sortedIndexOf:sortedIndexOf,
    sortedLastIndex:sortedLastIndex,
    sortedLastIndexOf:sortedLastIndexOf,
    sortedUniq:sortedUniq,
    tail:tail,
    take:take,
    takeRight:takeRight,
    union:union,
    uniq:uniq,
    without:without,
  }
}()
