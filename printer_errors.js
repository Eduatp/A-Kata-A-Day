//Printer Errors
//Level: 7kyu

function printerError(s) {
    var val_arr=("abcdefghijklm").split(""); // A base array of characters a-m
    var n=s.length;
    var i=0;
    var count=0;
    while(i<n)
    {
        if(val_arr.indexOf(s[i])===-1) //Condition to check if a character is a part of the base array
        {
            count++;
        }
        i++;
    }
    return (count+"/"+n);
}
