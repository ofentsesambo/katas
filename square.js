function square(n){
    var i; 
    var j;
    var inside = "";

        for(i = 0; i < n; i++){
            
            for(j = 0; j < n; j++)
            {
             inside = inside + "#";    
            }
         console.log(inside);   
         inside = "";
        
        }
}
console.log(square(10))