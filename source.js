
/**
 * @description Searches for an element in an array from a specified start index to
 * the end index by recursively dividing the search range into half and comparing the
 * element with the target value.
 * 
 * @param {array} arr - array that contains the values to be searched for the specified
 * `x`.
 * 
 * @param {integer} x - value being searched for in the array.
 * 
 * @param {integer} start - index of the left boundary of the subarray to be searched.
 * 
 * @param {integer} end - 2nd limit of the array's range to search for the specified
 * value `x`.
 * 
 * @returns {boolean} a boolean value indicating whether the specified element exists
 * in the array.
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
 * @description Retrieves the application ID from a parameter or a record based on
 * the provided value. It returns the retrieved app ID as a string.
 * 
 * @returns {string} a unique identifier for an application.
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
 * @description Takes an array of cell values as input and generates a new generation
 * of cells by iterating over the current generation's rows, keeping track of alive
 * neighbors and their count to determine if a cell is alive in the next generation.
 * 
 * @param {array} cells - 2D grid of cells to be evolved in the new generation.
 * 
 * @returns {array} an array of booleans representing the fate of each cell in the
 * next generation.
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
