describe('Nearest', function() {
  describe('when the point is the nearest solution', function() {
    describe('and the test is also that solution', function() {
      beforeEach(function() {
        this.nearest = nearestPeriodicValue(5, 5, 5);
      });

      it('should return the correct value', function() {
        expect(this.nearest).to.equal(5);
      });
    });

    describe('and the test is 1 interval ahead', function() {
      beforeEach(function() {
        this.nearest = nearestPeriodicValue(5, 10, 5);
      });

      it('should return the correct value', function() {
        expect(this.nearest).to.equal(5);
      });
    });

    describe('and the test is 2 intervals ahead', function() {
      beforeEach(function() {
        this.nearest = nearestPeriodicValue(5, 15, 5);
      });

      it('should return the correct value', function() {
        expect(this.nearest).to.equal(5);
      });
    });

    describe('and the test is 3 intervals ahead', function() {
      beforeEach(function() {
        this.nearest = nearestPeriodicValue(5, 20, 5);
      });

      it('should return the correct value', function() {
        expect(this.nearest).to.equal(5);
      });
    });

    describe('and the test is 1 interval behind', function() {
      beforeEach(function() {
        this.nearest = nearestPeriodicValue(5, 0, 5);
      });

      it('should return the correct value', function() {
        expect(this.nearest).to.equal(5);
      });
    });

    describe('and the test is 2 intervals behind', function() {
      beforeEach(function() {
        this.nearest = nearestPeriodicValue(5, -5, 5);
      });

      it('should return the correct value', function() {
        expect(this.nearest).to.equal(5);
      });
    });

    describe('and the test is 3 intervals behind', function() {
      beforeEach(function() {
        this.nearest = nearestPeriodicValue(5, -10, 5);
      });

      it('should return the correct value', function() {
        expect(this.nearest).to.equal(5);
      });
    });
  });

  describe('when the nearest solution is ahead of the point', function() {
    describe('and the test is within 1 interval', function() {
      beforeEach(function() {
        this.nearest = nearestPeriodicValue(5, 6, 5);
      });

      it('should return the correct value', function() {
        expect(this.nearest).to.equal(6);
      });
    });

    describe('and the test is within 2 intervals', function() {
      beforeEach(function() {
        this.nearest = nearestPeriodicValue(5, 11, 5);
      });

      it('should return the correct value', function() {
        expect(this.nearest).to.equal(6);
      });
    });

    describe('and the test is within 3 intervals', function() {
      beforeEach(function() {
        this.nearest = nearestPeriodicValue(5, 16, 5);
      });

      it('should return the correct value', function() {
        expect(this.nearest).to.equal(6);
      });
    });
  });

  describe('when the nearest solution is behind the point', function() {
    describe('and it is within 1 interval', function() {
      beforeEach(function() {
        this.nearest = nearestPeriodicValue(5, 4, 5);
      });

      it('should return the correct value', function() {
        expect(this.nearest).to.equal(4);
      });
    });

    describe('and it is within 2 intervals', function() {
      beforeEach(function() {
        this.nearest = nearestPeriodicValue(5, -1, 5);
      });

      it('should return the correct value', function() {
        expect(this.nearest).to.equal(4);
      });
    });

    describe('and it is within 3 intervals', function() {
      beforeEach(function() {
        this.nearest = nearestPeriodicValue(5, -6, 5);
      });

      it('should return the correct value', function() {
        expect(this.nearest).to.equal(4);
      });
    });
  });
});