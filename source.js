
/**
 * @description Determines whether a given element exists in an array within a specified
 * range. It recursively searches for the element by comparing it to the middle and
 * then left or right elements of the range until it finds the element or determines
 * it is not present in the range.
 * 
 * @param {array} arr - array that contains the searched value.
 * 
 * @param {number} x - value being searched for in the array.
 * 
 * @param {integer} start - index of the leftmost element that should be included in
 * the search result.
 * 
 * @param {integer} end - 2nd index of the array where the target value `x` is located,
 * and it is used to determine the midpoint of the search range.
 * 
 * @returns {boolean} a boolean value indicating whether the specified element `x`
 * exists in the array between `start` and `end`.
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
 * @description Retrieves an application ID based on a given parameter "sysparm_appName"
 * or "sysparm_appname". If the parameter is provided, it returns the app ID as a
 * number string. Otherwise, it logs an error message and returns null.
 * 
 * @returns {string} an application ID string based on input parameters.
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
 * @description Generates a new population of cells based on the given current
 * generation, using the cell's neighbors to determine if it is alive or dead in the
 * next generation.
 * 
 * @param {array} cells - 2D grid of cells, where each cell can be alive or dead, and
 * is used to generate the next generation of cells through a simulation process.
 * 
 * @returns {array} a new generation of cells, represented as an array of alive or
 * dead cells.
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
