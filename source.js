
/**
 * @description Checks if an element exists in a sorted array within a specified
 * range. It recursively searches for the element by comparing it to the middle and
 * both ends of the range if the middle element is not found.
 * 
 * @param {array} arr - 2D array to be searched for the specified `x`.
 * 
 * @param {number} x - value being searched for in the array.
 * 
 * @param {number} start - index of the leftmost element in the array that the search
 * should start from.
 * 
 * @param {number} end - 2nd index of the array where the search will stop.
 * 
 * @returns {boolean} a boolean indicating whether the specified element `x` is present
 * in the array within the given range.
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
 * @description Retrieves the application ID based on a parameter passed in and stores
 * it in a variable for use later in the pipeline.
 * 
 * @returns {integer} an application ID string.
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
 * @description Generates a new population of cells based on the current state of the
 * cells, using a simple neural network-like rule to determine whether a cell is alive
 * or dead in the next generation.
 * 
 * @param {array} cells - 2D array of cells to be evolved in the next generation,
 * with each cell being represented by a 0 or 1 value indicating whether the cell is
 * alive or dead, respectively.
 * 
 * @returns {array} an array of arrays representing the next generation of cells,
 * where each cell is alive or dead based on its neighbors.
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
