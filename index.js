// Code your solution in this file
// function findMatching(driversArray, string) {
//   return driversArray.filter(function (driverElement) {
//     return driverElement.toLowerCase() === string.toLowerCase();
//   });
// }

// function fuzzyMatch(driversArray, string) {
//   return driversArray.filter (function (driverElement) {
//     return driverElement.slice(0, string.length) === string
//   })
// }

// function matchName(driversArray, string) {
//   return driversArray.filter (function (driverElement) {
//     return driverElement.name === string
//     // return driverElement['name'] === string
//   })
// }

function findMatching(array, string) {
  return array.filter(function(driver) {
      return driver.toUpperCase() === string.toUpperCase();
  })
}

function fuzzyMatch(array, string) {
  return array.filter(function(driver) {
    return driver.slice(0, 2) === string.slice(0, 2);
    // return driver.toUpperCase().slice(0, string.length) === string.toUpperCase();
  })
}

function matchname(array, string) {
  return array.filter(function(driver) {
    
  })
}