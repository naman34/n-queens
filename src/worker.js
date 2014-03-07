





self.addEventListener('message', function(e) {

  var count = 0;

  var bitwiseQueens = function(col, minD, majD, row, n){

    for (var i = 0; i < n; i++) {
      var attempt = 1 << i;
      //var newcols = col | attempt;
      if( ( (col | minD | majD) & attempt) !== attempt){

        if(row === n-1){
          count ++;
        } else {

          bitwiseQueens(
            col | attempt,
            (minD | attempt) << 1,
            (majD | attempt) >> 1,
            row +1,
            n
          );

        }

      }

    }

  };


  //var c = e.data.col;

  bitwiseQueens(...);

  self.postMessage(e.data);
}, false);