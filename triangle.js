function triangle(a){
    var inside =" ";
    var tri = " ";

    for (i = 0; i < a; i++){
        inside  += "#";
        tri = inside;
        console.log(tri);
    }
}

triangle(10);