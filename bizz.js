// Bizz - the business days calculator

(function(window) {
  'use strict';

  function define_Bizz() {
    var Bizz = {};
    Bizz.greet = function() {
      alert("yo!");
    }
    return Bizz;
  }

  if(typeof(Bizz) === 'undefined') {
    window.Bizz = define_Bizz();
  } else {
    console.log("Bizz already defined.");
  }
})(window);
