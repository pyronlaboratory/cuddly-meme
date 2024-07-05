
/**
 * @description Searches for an element `x` in a given array `arr` between `start`
 * and `end`, returning `true` if found and `false` otherwise.
 * 
 * @param {array} arr - array being searched for the given `x` value.
 * 
 * @param {number} x - value being searched for in the array.
 * 
 * @param {integer} start - index of the left half of the array to search from.
 * 
 * @param {number} end - 2nd limit of the range for which the algorithm searches for
 * the specified value `x`.
 * 
 * @returns {boolean} a boolean value indicating whether the specified element is
 * present in the array between the start and end indices.
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
 * @description Retrieves and returns an application ID based on a given parameter string.
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
 * @description Takes an array of cell states as input, loops through each row of
 * cells, and updates the state of each cell based on its neighbors' states. It returns
 * the next generation of cells.
 * 
 * @param {array} cells - 2D array of cells that will be used to generate the next generation.
 * 
 * @returns {array} a new generation of cells, represented as an array of integers
 * indicating whether each cell is alive or not.
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
