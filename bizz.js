// Bizz - the business days calculator

(function(window) {
  'use strict';

  function define_Bizz() {
    var Bizz = {};

    /**
     * Calculate business days between two dates
     *
     * @param {Date} startDate
     * @param {Date} endDate
     * @param {Array} holidays
     * @return {Number} days
     */
    Bizz.daysBetween = function(startDate, endDate, holidays) {
      // TODO: check if startDate < endDate

      return _bizDaysBetween(startDate, endDate);
    }

    function _bizDaysBetween(startDate, endDate) {
      var holidays = ['2016-02-02', '2016-02-03'];
      var daysCount = 0;
      var removeHolidays;

      for(var i = startDate; i <= endDate; i.setDate(i.getDate() + 1)) {
        if (i.getDay() != 6 && i.getDay() != 0) {
          daysCount = daysCount + 1;
        }
      }

      alert(daysCount);
      removeHolidays = _weekdayHolidays(startDate, endDate, holidays);
      alert(removeHolidays);

      return daysCount - removeHolidays;
    }

    function _weekdayHolidays(startDate, endDate, holidays) {
      var weekdayHolidays = 0;
      var i = holidays.length;
      var currentDate;

      while (i--) {
        currentDate = new Date(holidays[i]);

        if (currentDate >= startDate &&
            currentDate <= endDate &&
            currentDate.getDay() != 6 &&
            currentDate.getDay() != 0) {
           weekdayHolidays = weekdayHolidays + 1;
        }
      }

      return weekdayHolidays;
    }

    function _daysBetween(startDate, endDate) {
      // The number of milliseconds in one day
      var ONE_DAY = 1000 * 60 * 60 * 24;

      // Convert both dates to milliseconds
      var startDate_ms = startDate.getTime();
      var endDate_ms = endDate.getTime();

      // Calculate the difference in milliseconds
      var difference_ms = Math.abs(startDate_ms - endDate_ms);

      // Convert back to days and return
      return Math.round(difference_ms/ONE_DAY);
    }

    return Bizz;
  }

  if(typeof(Bizz) === 'undefined') {
    window.Bizz = define_Bizz();
  } else {
    console.log("Bizz already defined.");
  }
})(window);
