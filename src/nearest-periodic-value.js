function nearestPeriodicValue(point, test, period) {
  // The distance between the test and the point
  var diff = test - point;

  // The number of periods between the point and test
  var periodDiff = Math.floor(Math.abs(diff/period));

  // The number of excessive units between the point and test
  var excess = periodDiff * period;

  // Whether our excess is in front of or behind the test
  var direction = diff > 0 ? -1 : 1;

  // The solution is our test without the excess
  return test + direction * excess;
}

export default nearestPeriodicValue;
