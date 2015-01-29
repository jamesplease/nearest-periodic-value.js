function nearestPeriodicValue(point, value, period) {
  // Subtract any excess from our value, which is
  // given by the period times the number of periods
  // in the diff. parseInt drops our decimal values.
  return value - period * parseInt((value - point)/period);
}

export default nearestPeriodicValue;
