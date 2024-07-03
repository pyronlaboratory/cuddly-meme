
/**
 * @description Searches for an element `x` in a sorted array `arr` between indices
 * `start` and `end`. It returns `true` if `x` is found before index `mid`, otherwise
 * it recursively calls itself with the updated range.
 * 
 * @param {array} arr - 1D array to be searched for a specific element.
 * 
 * @param {number} x - value being searched for in the array.
 * 
 * @param {number} start - index of the left edge of the subarray to search in.
 * 
 * @param {number} end - 2nd point of the sorted array.
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
 * @description Retrieves an application ID based on a given parameter and logs the
 * result for debugging purposes.
 * 
 * @returns {integer} an integer representing the application ID.
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
 * @description Takes an array of cells as input, where each cell is a binary value
 * (0 or 1). It generates a new generation of cells by iterating over the existing
 * cells and updating the state of each cell based on its neighbors. The function
 * returns an array of cells in the new generation.
 * 
 * @param {array} cells - 2D array of cells that are being simulated, and it is used
 * to generate the next generation of cells through a process of cell division, growth,
 * and death.
 * 
 * @returns {array} an array of booleans representing the alive cells in each row of
 * the next generation.
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
