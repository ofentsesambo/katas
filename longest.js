function longest(myArray) {
  var i;
  var max = "";

  for (i = 0; i < myArray.length; i++) {
    if (myArray[i].length > max.length) {
      max = myArray[i];    }  }  return max;
}
console.log(longest(["tumelo", "bonolo", "hei", "jvfa"]));
