var Car = function(maxSpeed, driver) {
  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function(speed, time) {
    console.log(speed * time);
  };
  this.logDriver = function() {
    console.log("driver name is " + this.driver);
  };
};

var myCar = new Car(70, "Ninja Man 1");
var myCar2 = new Car(80, "Ninja Man 2");
var myCar3 = new Car(90, "Ninja Man 3");
var myCar4 = new Car(100, "Ninja Man 4");

myCar.drive(40, 5);
myCar3.logDriver();
