
function boggleSolver(grid, dict) {
  this.grid = grid;
  this.answers = new Set();
}

boggleSolver.prototype.solve = function findWords(grid, dict, answers) {
  //new list to hold words
  var used = [];
  //loop through grid
  for (var i = 0; i < grid.length; i++) {
    used[i] = [];
  }
  //loop to make all grid positions false 
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      used[i][j] = false;
    }
  }
// init currWord to start building string
  var currWord = '';
  //look for all words that start w/ any char in grid
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      findAnswers(grid, dict, used, i, j, currWord, answers);
    }
  }
}

//finds and stores all correct words in boggle
function findAnswers(grid, dict, used, i, j, currWord, answers){
  //mark as true & start building string
  used[i][j] = true;
  currWord = currWord + grid[i][j];

//if its 3+ letters and in the dictionary then add it to answers
  if (currWord.length >= 3){
    if (dict.includes(currWord)) {
      answers.push(currWord);
    }
  }

  // checks surrounding cells
  for (var row = i - 1; row <= i + 1 && row < grid.length; row++){
    for (var col = j-1; col <= j+1 && col < grid[0].length;col++){
      if (row >= 0 && col >= 0 && !used[row][col]){
        findAnswers(grid, dict, used, row, col, currWord, answers);
      }
    }
  }
  // refresh string & grid 
  currWord = '';
  used[i][j] = false;
};

function findAllSolutions(grid, dict) {
  console.log("findAllSolutions");
  let solver = new boggleSolver(grid, dict);
  solver.solve();
  return [...solver.answers];
}

export default findAllSolutions;





