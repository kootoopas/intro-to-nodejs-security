var validateEmailFormat = function( string ) {
  var emailExpression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  return emailExpression.test( string );
};

var start1 = process.hrtime();
console.log(validateEmailFormat("baldwin@andyet.net"));
console.log(process.hrtime(start1));

var start2 = process.hrtime();
console.log(validateEmailFormat("jjjjjjjjjjjjjjjjjjjjjjjjjjjj@ccccccccccccccccccccccccccccc.5555555555555555555555555555555555555555{"));
console.log(process.hrtime(start2));

var start3 = process.hrtime();
console.log(validateEmailFormat("jjjjjjjjjjjjjjjjjjjjjjjjjjjj@ccccccccccccccccccccccccccccc.55555555555555555555555555555555555555555{"));
console.log(process.hrtime(start3));

var start4 = process.hrtime();
console.log(validateEmailFormat("jjjjjjjjjjjjjjjjjjjjjjjjjjjj@ccccccccccccccccccccccccccccc.555555555555555555555555555555555555555555555555555555{"));
console.log(process.hrtime(start4));
