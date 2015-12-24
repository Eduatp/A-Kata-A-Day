function getLargerNumbers(a, b) {
  var ans=[];
  var i=0;
  while(i<a.length)
  {
      if(a[i]>b[i])
      {
          ans.push(a[i]);
      }
      else if(a[i]<b[i])
      {
          ans.push(b[i]);
      }
      else if(a[i]===b[i])
      {
          ans.push(a[i]);
      }
      
      i++;
  }
  
  return ans;
}
