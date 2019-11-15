function combine(listA, listB, combList = []) {
     if (listA.length === 0 || listB.length === 0) {
         return combList.reverse();
     } else {
       combList.unshift(listA.shift());
       combList.unshift(listB.shift());
       return combine(listA, listB, combList);
     }
   }
  
   console.log(combine([11, 22, 33], [1, 2, 3]));