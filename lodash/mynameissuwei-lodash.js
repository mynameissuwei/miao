var mynameissuwei = {
  chunk: function chunk(array, size) {
    var array1 = []
    for (var i = array.length; i > size; i--) {
      array1.push(array.splice(i, 1))
    }
    return array1
  },

}
