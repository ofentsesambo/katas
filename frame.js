
function frame(words)
{
    var wordsLength = words.length;
    
    var lenLongest = words[0].length;
    for(var i=1 ;i<wordsLength; i++)
    {
        if(words[i].length >= lenLongest)
        {
            lenLongest = words[i].length;
        }
    }
    
    var firstRow = "";
    var firstRowLength = lenLongest + 4;
    for(var i = 0; i<firstRowLength; i++)
    {
        firstRow = firstRow + "*";
    }
    console.log(firstRow);
    
    for(var i = 0; i < wordsLength; i++)
    {
        var wordRow = "* " + words[i];
        var wordRowLength = wordRow.length;
        for(var count = wordRowLength; count <= firstRowLength - 2; count++){
          wordRow = wordRow + " ";
        }
        wordRow = wordRow + "*";
        console.log(wordRow)
    }
    
    console.log(firstRow);
}

frame(["hey","hello","you good","i hope so","have a lovely day"]);



