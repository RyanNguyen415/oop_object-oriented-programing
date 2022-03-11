const Car = require("./Car");

///Car is super class, Truck is subclass
class TrucK extends Car {
  constructor(make, model, year, color, user_id, towHitchSize) {
    super(make, model, year, color, user_id);
    this.towHitchSize - towHitchSize;
  }

  offRoadFeature() {
    this.#turnAutoGripOn();
    console.log("going offroad");
  }
  //method overide- because car also has startengine, but truck's start engine will override it.
  startEngine() {
    console.log("starting truck engine");
  }

  #turnAutoGripOn() {
    console.log("autogrip engaged");
  }
}
