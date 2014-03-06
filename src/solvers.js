  /*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

String.prototype.reverse = function(){
  return this.split('').reverse().join('');
}


var removeReverses = function(strings){
  var result = [];
  _.each(strings, function(string){
    if(result.indexOf(string.reverse()) === -1){
      result.push(string);
    }
  });
  return result;
};

var returnBoardFromStrings = function(row, n){ // was (solution, n)
  //return _.map(solution, function(row){
    return _.map(row.split(''), function(pos){
      pos = parseInt(pos);
      return _.map(_.range(n), function(val){
        if(val === pos){
          return 1;
        }
        return 0;
      });
    });
  //});
}



window.findNRooksSolution = function(n) {
  var solution = [];

  // var string = _.range(n).join("");

  // var allPossComb = function(string){
  //   if(string.length === 1){
  //     return [string];
  //   }

  //   var result = [];
  //   for (var i = 0; i < string.length; i++) {
  //     var after = allPossComb(string.slice(0,i).concat(string.slice(i+1)));
  //     for (var j = 0; j < after.length; j++) {
  //       var resultString = string[i].concat(after[j]).toString();
  //       result.push(resultString);
  //     };
  //   };

  //   return result;
  // }

  // solution = allPossComb(string);
  // //solution = removeReverses(solution);
  // //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // console.log(solution.length);
  // solution = returnBoardFromStrings(solution, n);
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution[0];

  var string = "";
  for(var i = 0; i < n; i++){
    string += i;
  }

  return returnBoardFromStrings(string, n);

};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // = findNRooksSolution(n).length; //fixme
  if(n <= 2){
    return n;
  }

  var solutionCount = countNRooksSolutions(n-1) * n;

  //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};




// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
