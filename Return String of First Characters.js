function makeString(s){
  var ret=[];
  var s_arr=s.split(" ");
  var i=0;
  while(i<s_arr.length)
  {
      ret.push(s_arr[i][0]);
      i++;
  }
  var ans='';
  i=0;
  while(i<ret.length)
  {
      ans+=ret[i];
      i++;
  }
  return ans;
}