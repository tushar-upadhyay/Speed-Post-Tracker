let dict = {
    'First':0,
    'Second':1,
    'Third':2,
    'Fourth':3,
    'Fifth':4,
    'Sixth':5
}
function solve(captcha, context) {
  if (context == "Evaluate the Expression") {
    captcha = String(captcha);
    let data = [];
    let counter = 0;
    for (let char of captcha) {
      if (counter % 2 == 0) {
        data.push(char);
      }
      counter = counter + 1;
    }
    let a = parseInt(data[0]);
    let b = parseInt(data[2]);
    let operator = data[1];
    let result;
    if (operator == "-") {
      result = a - b;
    } else {
      result = a + b;
    }
    return result;
  }
  else if(context=="Enter characters as displayed in image"){
      return String(captcha);
  }
  else{
      captcha = String(captcha).split(',');
      let position = context[2];
      let intPostition = dict[position];
      return captcha[intPostition];
  }
}
module.exports = solve;
