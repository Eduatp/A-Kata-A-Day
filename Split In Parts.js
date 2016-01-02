var splitInParts = function(s, partLength)
{
    var ans="";
    var i=0;
    while(i<s.length)
    {
        if(s.length-i<=partLength)
        {
            ans+=s.substring(i,s.length);
            break;
        }
        else
        {
            ans+=s.substring(i,i+partLength);
            ans+=" ";
            i+=partLength;
        }
    }
    return ans;
};
