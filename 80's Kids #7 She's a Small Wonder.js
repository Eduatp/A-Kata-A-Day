function Robot() {
  this.ans = []; 
}

Robot.prototype.learnWord = function(word) 
{
  var res;
  var word_arr=word.split(" ");
  if(word_arr.length===1 && word!=='')
  {
      var lower_word=word.toLowerCase();
      var knowledge=('thank you for teaching me i already know the word do not understand the input').split(" ");
      
      if(/^[a-zA-Z- ]*$/.test(lower_word) === true)
      {
          if(this.ans.indexOf(lower_word)===-1 && knowledge.indexOf(lower_word)===-1)
          {
              
              this.ans.push(lower_word);
              res = 'Thank you for teaching me '.concat(word);
              return res;
          }
          else
          {
              res = 'I already know the word '.concat(word);
              return res;
          }
      }
      else
      {
          res='I do not understand the input';
          return res;
      }
  }
  else
  {
      res='I do not understand the input';
      return res;
  }
}

var vicky = new Robot();
