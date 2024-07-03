
/**
 * @description Checks if a given value `x` exists within an array `arr` between two
 * indices `start` and `end`. It recursively calls itself if the value is not found
 * within the specified range.
 * 
 * @param {array} arr - array that contains the elements to be searched for the
 * specified `x`.
 * 
 * @param {number} x - value being searched for in the array.
 * 
 * @param {integer} start - index of the left boundary of the subarray to be searched.
 * 
 * @param {number} end - 2nd limit of the array's elements that the function will
 * search for the specified value `x`.
 * 
 * @returns {boolean} a boolean value indicating whether the target element `x` is
 * present in the array between `start` and `end`.
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
 * @description Retrieves and returns the application ID for a given parameter.
 * 
 * @returns {number} an app ID string.
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
 * @description Generates a new population of cells based on the current cells and
 * their neighbors, using a simple cellular automata rule.
 * 
 * @param {array} cells - 2D grid of cells, which is used to generate the next
 * generation of cells through a set of rules based on the alive and neighboring cells
 * of each cell in the grid.
 * 
 * @returns {array} an array of alive cells in the next generation, determined by the
 * cell's current state and its neighbors.
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
