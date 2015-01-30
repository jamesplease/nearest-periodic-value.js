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

  /*jshint -W018 */

  var nearestPeriodicValue = function (point, value, period) {
    var relation = (value - point) / period;

    // We're equidistant from the nearest point if the
    // distance from the point is a half-integer value
    // of our period.
    var equidistant = !(relation % 0.5) && relation % 1;

    // If we're equidistant, then we add a period to
    // ensure that we always pick the value in front
    var mod = equidistant ? period : 0;

    // Adjust our value by an amount given by the closest #
    // of periods contained in the distance between the point
    // and the value
    return mod + (value - period * Math.round(relation));
  };




  return nearestPeriodicValue;
});
//# sourceMappingURL=nearest-periodic-value.js.map