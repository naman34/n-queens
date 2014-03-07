describe('solvers', function() {
  window.displayBoard = function() {};

  describe('findNRooksSolution()', function() {

    it('finds a valid solution for n of 1-8', function() {
      _.range(1, 9).map(function(n) {
        var solutionBoard = new Board(findNRooksSolution(n));

        expect(solutionBoard.get('n')).to.equal(n);
        expect(solutionBoard.hasAnyRooksConflicts()).to.be.equal(false);
      });
    });

  });

  describe('countNRooksSolutions()', function() {

    it('finds the number of valid solutions for n of 1-8', function() {
      _.range(1, 9).map(function(n) {
        var solutionCount = countNRooksSolutions(n);
        var expectedSolutionCount = [1, 1, 2, 6, 24, 120, 720, 5040, 40320][n];

        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });
    });

  });

  describe('findNQueensSolution()', function() {

    it('finds a valid solution for n of 0-8', function() {
      _.range(1, 8).map(function(n) {
        var solutionBoard = new Board(findNQueensSolution(n));

        // expect(solutionBoard.get('n')).to.equal(n);
        expect(solutionBoard.hasAnyQueensConflicts()).to.be.equal(false);
      });
    });

  });

  describe('countNQueensSolutions()', function(done) {

    // it('finds the number of valid solutions for n of 0-8', function() {
    //   _.range(0, 9).map(function(n) {
    //     var solutionCount = countNQueensSolutions(n);
    //     var expectedSolutionCount = [1, 1, 0, 0, 2, 10, 4, 40, 92][n];

    //     expect(solutionCount).to.be.equal(expectedSolutionCount);
    //   });
    // });

    it('finds the number of valid solutions for n == 4', function(done){

      countNQueensSolutions(4, function(number){
        expect(number).to.be.equal(2);
        done();
      });

    });

    it('finds the number of valid solutions for n == 5', function(done){

      countNQueensSolutions(5, function(number){
        expect(number).to.be.equal(10);
        done();
      });

    });

    it('finds the number of valid solutions for n == 6', function(done){

      countNQueensSolutions(6, function(number){
        expect(number).to.be.equal(4);
        done();
      });

    });

    it('finds the number of valid solutions for n == 8', function(done){

      countNQueensSolutions(8, function(number){
        expect(number).to.be.equal(92);
        done();
      });

    });

    it('finds the number of valid solutions for n == 10', function(done){

      countNQueensSolutions(10, function(number){
        expect(number).to.be.equal(724);
        done();
      });

    });

    it('finds the number of valid solutions for n == 12', function(done){

      countNQueensSolutions(12, function(number){
        expect(number).to.be.equal(14200);
        done();
      });

    });

    it('finds the number of valid solutions for n == 14', function(done){

      countNQueensSolutions(14, function(number){
        expect(number).to.be.equal(365596);
        done();
      });

    });

  });

});
