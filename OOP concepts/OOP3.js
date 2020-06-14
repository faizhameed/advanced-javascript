class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "attack with " + this.weapon;
  }
}

const peter = new Elf("peter", "stones");

// but classes are just syntactical sugar they are actually objects. but actually they are using prtypal inheritance
