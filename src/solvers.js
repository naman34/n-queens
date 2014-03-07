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
//var _ = require('./../lib/underscore.js');

// String.prototype.reverse = function(){
//   return this.split('').reverse().join('');
// }


// var removeReverses = function(strings){
//   var result = [];
//   _.each(strings, function(string){
//     if(result.indexOf(string.reverse()) === -1){
//       result.push(string);
//     }
//   });
//   return result;
// };

var returnBoardFromString = function(row, n){ // was (solution, n)
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



var findNRooksSolution = function(n) {
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

  var returnVal = returnBoardFromString(string, n);
  //console.log(returnVal);
  return returnVal;

};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
var countNRooksSolutions = function(n) {
  // = findNRooksSolution(n).length; //fixme
  if(n <= 2){
    return n;
  }

  var solutionCount = countNRooksSolutions(n-1) * n;

  //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};




// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
var findAllNQueensSolution = function(n) {
  var solution = [];

  var string = _.range(n).join("");

  var allPossComb = function(string){
    if(string.length === 1){
      return [string];
    }

    var result = [];
    for (var i = 0; i < string.length; i++) {
      var after = allPossComb(string.slice(0,i).concat(string.slice(i+1)));
      for (var j = 0; j < after.length; j++) {
        var resultString = string[i].concat(after[j]).toString();
        result.push(resultString);
      };
    };

    return result;
  }

  solution = allPossComb(string);

  solution = _.map(solution, function(board){
    return returnBoardFromString(board, n);
  });


  solution = _.filter(solution, function(board){

    //var obj = returnBoardFromString(board, n);
    //obj.n = n;
    var backboneBoard = new Board(board);
    return !backboneBoard.hasAnyMajorDiagonalConflicts() && !backboneBoard.hasAnyMinorDiagonalConflicts();

  });



  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // $('#solutions').html("");
  // _.each(solution, function(board){
  //   $('#solutions').append(
  //         new BoardView({
  //           model: new Board(board)
  //         }).render()
  //       );
  // });
  return solution;
};

var findNQueensSolution = function(n){
  var sol = findAllNQueensSolution(n)[0];
  return sol || [];
}


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
var countNQueensSolutions = function(n, callback) {
  // var solutionCount = findAllNQueensSolution(n).length; //fixme
  // if(n === 0){
  //   solutionCount = 1;
  // }
  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  // return solutionCount;
  var workers = [];
  var returns = [];
  var totalCount = 0;
  for(var i = 0; i < n; i++){
    workers[i] = new Worker('/src/worker.js');
    workers[i].postMessage([
        n,
        1 << i,
        (1 << i) << 1,
        (1 << i) >> 1,
        1
      ]);
    workers[i].addEventListener('message', function(e){
      returns.push(e.data);
      totalCount += e.data;
      if(returns.length === n){
        callback(totalCount);
        workers.forEach(function(worker){
          worker.terminate();
        });
      }
    });
  }

};



// window.worker = new Worker('/src/worker.js');

// worker.addEventListener('message', function(e) {
//   console.dir(e.data);
// }, false);
