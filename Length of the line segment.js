function lengthOfLine(array){
  var x1=array[0][0];
  var y1=array[0][1];
  var x2=array[1][0];
  var y2=array[1][1];
  
  var ans = Math.sqrt(Math.pow(y2-y1,2)+Math.pow(x2-x1,2));
  ans = ans.toString();
  var ans_round=parseFloat(ans).toFixed(2);
  
  return ans_round;
}