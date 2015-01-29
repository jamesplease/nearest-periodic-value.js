function nearestPeriodicValue(point, value, period) {
  // The distance between the value and the point
  var diff = value - point;

  // Subtract any excess from our value, which is
  // given the period times the number of periods
  // in the diff. parseInt drops our decimal values.
  return value - period * parseInt(diff/period);
}

export default nearestPeriodicValue;
