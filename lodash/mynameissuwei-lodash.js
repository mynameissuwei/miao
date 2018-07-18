var mynameissuwei = {
  chunk: function (array, size = 1) {
    var array1 = []
    for (var i = array.length; i > size; i--) {
      array1.push(array.splice(i, 1))
    }
    return array1
  },

  compact: function compact(array) {
    return array.filter(x => x)
  },

  concat: function (array,...items) {
    for(var value of items) {
      if(Array.isArray(value)) array.push(...value)
        else array.push(value)
    }
    return array
  },

  difference: function (array,...value) {
    function spread(array) {
      var res = []
      for(i = 0; i < array.length; i++) {
        res.push(...array[i])
      }
      return res
    }
    var res = []
    value = spread(value)
    w:for(i = 0; i < array.length; i++) {
        for(j = 0; j < value.length; j++) {
          if((Object.is( array[i],value[j] )) ) {
            continue w
          }
        }
      res.push(array[i])
    }
    return res
  },
}
