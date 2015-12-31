function movie(card, ticket, perc) 
{
    var n=1;
    var tick_price;
    var temp=ticket;
    var total=0;
    
    while(true)
    {
        tick_price=ticket*n;
        temp*=perc;
        total+=temp;
        if(tick_price>Math.ceil(total+card))
        {
            break;
        }
        n++;
    }
    
    return n;
} 
