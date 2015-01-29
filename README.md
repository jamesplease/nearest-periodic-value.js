# periodic.js

Utilities for periodic functions. Useful for certain date operations.

### What are periodic values?

Periodic values are values that repeat in regular intervals, or periods. Consider
the values `[2, 5, 8]`. This is a set with a period of 3.

### Terminology

The collection of values that make up a periodic function are called the `solutions`.
Any given solution is called a `test`.

### API

##### `nearest(point, test, period)`

Find the nearest value to `point`. Supply a `test` value from the set of solutions and a `period`.

##### `nearestGreaterThan(point, test, period)`

Find the nearest value greater than `point`. Supply a `test` (one value that repeats) and a `period`.

##### `nearestLessThan(point, test, period)`

Find the nearest value less than `point`. Supply a `test` (one value that repeats) and a `period`.

