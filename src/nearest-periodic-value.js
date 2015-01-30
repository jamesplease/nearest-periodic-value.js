function nearestPeriodicValue(point, value, period) {
  // Adjust our value by an amount given by the closest #
  // of periods contained in the distance between the point
  // and the value
  return value - period * Math.round((value - point)/period);
}

export default nearestPeriodicValue;
