function flipNumber(n)
{
    n=n.split("").reverse().join("");
    var i=1;
    
    while(i<n.length)
    {
        var in_str=n.substring(0,i);
        var rev_str=n.substring(i,n.length);
        n=in_str+rev_str.split("").reverse().join("");
        
        i++;
    }
    
    return n;
}