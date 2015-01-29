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
    // Subtract any excess from our value, which is
    // given by the period times the number of periods
    // in the diff. parseInt drops our decimal values.
    return value - period * parseInt((value - point) / period);
  };




  return nearestPeriodicValue;
});
//# sourceMappingURL=nearest-periodic-value.js.map