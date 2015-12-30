function getSocks(name, socks) 
{
    socks.sort();
    var i=0;
    var c=0;
    var ans=[];
    if(name==='Punky')
    {
        while(i<socks.length)
        {
            if(i!==socks.length-1)
            {
                if(socks[i]!==socks[i+1])
                {
                    ans.push(socks[i]);
                    ans.push(socks[i+1]);
                    c=1;
                    break;
                }
            }
            i++;
        }
    }
    else if(name==='Henry')
    {
        while(i<socks.length)
        {
            if(i!==socks.length-1)
            {
                if(socks[i]===socks[i+1])
                {
                    ans.push(socks[i]);
                    ans.push(socks[i+1]);
                    c=1;
                    break;
                }
            }
            i++;
        }
    }
    if(c===1)
    {
        return ans;
    }
    else
    {
        return [];
    }
}