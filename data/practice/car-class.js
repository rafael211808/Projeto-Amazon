class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';

    return `${this.#brand} ${this.#model}, Speed: ${this.speed}Km/h, Trunk ${trunkStatus}`;
  }

  go(speed) {
    if (this.isTrunkOpen === true) {
      alert("can't go while the trunk is open");
    } else {
      this.speed += speed;
    }
    
    if (this.speed > 200) {
      this.speed = 200
    }
  }

  brake(speed) {
    this.speed -= speed;
    
    if (this.speed < 0) {
      this.speed = 0
    }
  }

  openTrunk() {
    if (this.speed !== 0) {
      alert("can't open the trunk while moving");
    } else {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
  this.isTrunkOpen = false;
  }
}

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla',
});
const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3',
});

car1.brake(5);
car1.openTrunk();

car1.closeTrunk();
car1.go(20);

car1.brake(100);
car2.go(210);

console.log(car1);
console.log(car2);

console.log(car1.displayInfo());
console.log(car2.displayInfo());

class RaceCar extends Car {
  constructor(carDetails) {
    super(carDetails);
  }

  go(speed) {
    if (this.isTrunkOpen === true) {
      alert("can't go while the trunk is open");
    } else {
      this.speed += speed;
    }
    
    if (this.speed > 300) {
      this.speed = 300
    }
  }

  openTrunk() {};

  closeTrunk() {};
}

const car3 = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
});

car3.go(300);

console.log(car3.displayInfo());