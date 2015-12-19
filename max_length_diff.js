function mxdiflg(a1, a2) {
    if(a1.length===0 || a2.length===0)
    {
        return -1;
    }
    
    else
    {
        var a1_len=[];
        var a2_len=[];
        var i=0;
        
        while(i<a1.length)
        {
            a1_len.push(a1[i].length);
            i++;
        }
        
        i=0;
        while(i<a2.length)
        {
            a2_len.push(a2[i].length);
            i++;
        }
        
        
        a1_len.sort(function(a, b){return a-b});
        a2_len.sort(function(a, b){return a-b});
        
        var diff1=Math.abs(a1_len[0]-a2_len[a2.length-1]);
        var diff2=Math.abs(a1_len[a1.length-1]-a2_len[0]);
        
        return Math.max(diff1,diff2);
    }
}
