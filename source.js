
/**
 * @description Determines if a specified value `x` is present within an array `arr`.
 * It returns `true` if `x` is found, otherwise it recursively searches for `x` from
 * the middle index to the end of the array.
 * 
 * @param {array} arr - array whose elements are being searched for the specified
 * value `x`.
 * 
 * @param {number} x - value being searched for in the array.
 * 
 * @param {integer} start - index of the leftmost element in the array that should
 * be searched for the specified value `x`.
 * 
 * @param {integer} end - 2nd half of the array that is being searched for the specified
 * value `x`.
 * 
 * @returns {boolean} a boolean value indicating whether the element `x` is present
 * in the array between `start` and `end`.
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
 * @description Retrieves the application ID based on a parameter passed from the
 * previous function and logs the result to the pipeline log.
 * 
 * @returns {string} a string representing the application ID.
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
 * @description Takes an array of cell states as input and generates a new generation
 * of cells by iterating over each cell, checking its neighbors' states, and updating
 * the current cell's state based on the alive/dead status of its neighbors.
 * 
 * @param {array} cells - 2D array of cells, where each cell can be alive (represented
 * by a value of 1) or dead (represented by a value of 0), and is used to generate
 * the next generation of cells through a process of probabilistic cell division and
 * death.
 * 
 * @returns {array} a new generation of cells, where each cell is alive or dead based
 * on its neighbors and the number of alive neighbors.
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
