class Car {
  //this constructs (makes) the object for you
  constructor(make, model, year, color, user_id) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.user_id = user_id;
  }
  startEngine() {
    this.#runningMotor();
    console.log("car engine started");
  }
  //# means private, made it private because we dont want this method to be called, just to be used by startEngine
  //never run motor by itself.  only run motor when start engine.
  #runningMotor() {
    console.log("running motor");
  }
}

const car = new Car("honda", "accord", "2012", "yellow", 2);
car.startEngine();

const car2 = new Car("toyota", "camry", "2018", "grey", 1);
