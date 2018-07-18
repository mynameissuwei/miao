var mynameissuwei = {
  chunk: function (array, size = 1) {
    var array1 = []
    for (var i = array.length; i > size; i--) {
      array1.push(array.splice(i, 1))
    }
    return array1
  },

  compact: function (array) {
    return array.filter(x => x)
  },

  concat: function (array,...items) {
    for(var value of items) {
      if(Array.isArray(value)) array.push(...value)
        else array.push(value)
    }
    return array
  },

  reverse: function(array) {
    var last = array.length - 1
    for (var i = 0; i < last / 2; i++) {
      [array[i],array[last - i]] = [array[last - i],array[i]]
    }
    return array
  },

  slice function(array,start = 0, end = array.length - 1) {
    var res = []
    for(start = 0; start <= end; start++) {
      res.push(array[start])
    }
    return res
  },
  // difference: function (array,...value) {
  //   function spread(array) {
  //     var res = []
  //     for(i = 0; i < array.length; i++) {
  //       res.push(...array[i])
  //     }
  //     return res
  //   }
  //   var res = []
  //   value = spread(value)
  //   w:for(i = 0; i < array.length; i++) {
  //       for(j = 0; j < value.length; j++) {
  //         if((Object.is( array[i],value[j] )) ) {
  //           continue w
  //         }
  //       }
  //     res.push(array[i])
  //   }
  //   return res
  // },
}
