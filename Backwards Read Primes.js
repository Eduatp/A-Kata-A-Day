function isPrime(n)
{
    if(n==2 || n==3)return true;
    else if(n%2===0 || n%3===0)return false;
    else{
        var i=5;
        while(i<=n/2)
        {
            if(n%i===0)
            {
                return false;
            }
            i++;
        }
    }
    return true;
}

function backwardsPrime(start, stop){
    var ans=[];
    while(start<=stop)
    {
        if(start>10)
        {
            if(start.toString()!==start.toString().split("").reverse().join(""))
            {
                if(isPrime(start) && isPrime(parseInt(start.toString().split("").reverse().join(""))))
                {
                    ans.push(start);
                }
            }
        }
        start++;
    }
    return ans;
}