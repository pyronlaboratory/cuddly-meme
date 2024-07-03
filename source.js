
/**
 * @description Determines if a specific element exists within an array. It iterates
 * through the array and compares the given element with each element in the middle,
 * then recursively searches for the element on either side.
 * 
 * @param {array} arr - array to be searched for the specified `x`.
 * 
 * @param {integer} x - value being searched for in the array.
 * 
 * @param {number} start - index of the leftmost element in the array that must be
 * searched for the specified value `x`.
 * 
 * @param {number} end - 2nd index of the array that the function searches for the
 * specified value `x`.
 * 
 * @returns {boolean} a boolean value indicating whether the element `x` is present
 * in the array between `start` and `end`, inclusive.
 */
const search = (arr, x, start, end) => {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === x) return true;
  if (arr[mid] > x) {
    return search(arr, x, start, mid - 1);
  } else {
    return search(arr, x, mid + 1, end);
  }
};


/**
 * @description Retrieves the application ID based on the given parameters and logs
 * the result to the pipeline.
 * 
 * @returns {integer} a unique identifier for an application.
 */
const getApplicationID = () => {
  var appID = "";
  gs.log("appid: " + this.getParameter("sysparm_appName"), "pipeline");
  var grAppID = new GlideRecord("cmdb_ci_business_app");
  if (grAppID.get(this.getParameter("sysparm_appname"))) {
    appID = grAppID.number.toString();
    gs.log("appid: " + appID, "pipeline");
  }
 return appID;
}

/**
 * @description Generates a new population of cells by iterating through the current
 * generation, updating the state of each cell based on its neighbors and the current
 * state of the cell.
 * 
 * @param {array} cells - 2D array of living cells in the simulation, which is used
 * to generate the next generation of cells through the application of neighborhood
 * rules.
 * 
 * @returns {array} an array of integers representing the next generation of cells,
 * where each element represents the alive state of a cell in the grid.
 */
function newGeneration(cells) {
  const nextGeneration = []
  for (let i = 0; i < cells.length; i++) {
    const nextGenerationRow = []
    for (let j = 0; j < cells[i].length; j++) {
      let neighbourCount = 0
      if (i > 0 && j > 0) neighbourCount += cells[i - 1][j - 1]
      if (i > 0) neighbourCount += cells[i - 1][j]
      if (i > 0 && j < cells[i].length - 1)
        neighbourCount += cells[i - 1][j + 1]
      if (j > 0) neighbourCount += cells[i][j - 1]
      if (j < cells[i].length - 1) neighbourCount += cells[i][j + 1]
      if (i < cells.length - 1 && j > 0) neighbourCount += cells[i + 1][j - 1]
      if (i < cells.length - 1) neighbourCount += cells[i + 1][j]
      if (i < cells.length - 1 && j < cells[i].length - 1)
        neighbourCount += cells[i + 1][j + 1]
      const alive = cells[i][j] === 1
      const cellIsAlive =
        (alive && neighbourCount >= 2 && neighbourCount <= 3) ||
        (!alive && neighbourCount === 3)
      nextGenerationRow.push(cellIsAlive ? 1 : 0)
    }
    nextGeneration.push(nextGenerationRow)
  }
  return nextGeneration
}
