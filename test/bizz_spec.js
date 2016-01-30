// Bizz.daysBetween

describe("Bizz.daysBetween", function() {
  it("returns number of days when all weekdays ", function() {
    var monday = new Date('2016-02-01'),
        friday = new Date('2016-02-05'),
        days = Bizz.daysBetween(monday, friday, []);

    expect(days).toBe(5);
  });

  it("removes saturdays and sundays", function() {
    var firstFriday = new Date('2016-01-29'),
        newFriday = new Date('2016-02-05'),
        days = Bizz.daysBetween(firstFriday, newFriday);

    expect(days).toBe(6);
  });

  it("removes holidays", function() {
    var monday = new Date('2016-02-01'),
        friday = new Date('2016-02-05'),
        holidays = ['2016-02-03'],
        days = Bizz.daysBetween(monday, friday, holidays);

    expect(days).toBe(4);
  });

  it("does not double-count holidays during weekends", function() {
    var firstFriday = new Date('2016-01-29'),
        newFriday = new Date('2016-02-05'),
        holidays = ['2016-01-30', '2016-01-31'],
        days = Bizz.daysBetween(firstFriday, newFriday, holidays);

    expect(days).toBe(6);
  });

  it("checks default holidays when none is given", function() {
    var fridayBeforeCarnival = new Date('2016-02-05'),
        fridayAfterCarnival = new Date('2016-02-12'),
        days = Bizz.daysBetween(fridayBeforeCarnival, fridayAfterCarnival);

    expect(days).toBe(4);
  });

  it("returns zero when start date is after end date", function() {
    var monday = new Date('2016-02-01'),
        friday = new Date('2016-02-05'),
        days = Bizz.daysBetween(friday, monday);

    expect(days).toBe(0);
  });
});
