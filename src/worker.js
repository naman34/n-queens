





self.addEventListener('message', function(e) {


  var bitwiseQueens = function(n, col, minD, majD, row){
    if(col === undefined){
      col = minD = majD = row = 0;
    }
    var count = 0;
    for (var i = 0; i < n; i++) {
      var attempt = 1 << i;
      if( !( (col | minD | majD) & attempt) ){
        if(row === n-1){
          count ++;
        } else {
          count += bitwiseQueens(n,
            col | attempt,
            (minD | attempt) << 1,
            (majD | attempt) >> 1,
            row +1
          );
        }
      }
    }
    return count;
  };

 // var getNQueens = function(n){
 //  //count = 0;
 //  var startTime = (new Date()).valueOf();
 //  var number = bitwiseQueens(n,0,0,0,0);
 //  var endTime = (new Date()).valueOf();
 //  var timeTaken = ((endTime - startTime) / 1000);
 //  console.log(count, "solutions for ", n, " queens. In ", timeTaken, " seconds.");
 // };

  //var arguments = e.data;

  self.postMessage(bitwiseQueens.apply(this, e.data));
}, false);















/*





function q(n, c, m, o, r, i, a, t){
  t = 0;
  for (i = 0; i < n; i++) {
    a = 1 << i;
    if( !( (c | m | o) & a) ){
      if(r == n-1){
        t++;
      } else {
        t += q(n,
          c | a,
          (m | a) << 1,
          (o | a) >> 1,
          r +1
        );
      }
    }
  }
  return t;
};

*/



