(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    module.exports = factory();
  } else {
    root.nearestPeriodicValue = factory();
  }
})(this, function () {
  "use strict";

  var nearestPeriodicValue = function (point, value, period) {
    // Adjust our value by an amount given by the closest #
    // of periods contained in the distance between the point
    // and the value
    return value - period * Math.round((value - point) / period);
  };




  return nearestPeriodicValue;
});
//# sourceMappingURL=nearest-periodic-value.js.map