const getFirstNames = require("../utilities/utils/index");
const list = require("../country/state/city/index");
function getPeopleInCity(list) {
  return (result = getFirstNames(list));
}
module.exports = getPeopleInCity;
