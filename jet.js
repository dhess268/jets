var Jet = function (color, size) {
  this.color = color;
  this.size = size;

  this.fly = function () {
    console.log("whoosh!");
  };

  this.takeOff = function () {
    console.log("lift off!");
  };

  this.engageSecondaryEngines = function () {
    console.log("Secondary Engines Engaged!");
  };
};

module.exports = Jet;
