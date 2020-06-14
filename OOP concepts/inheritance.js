class Character {
  constructor(name, weapon) {
    (this.name = name), (this.weapon = weapon);
  }
  attack() {
    return "attack with " + this.weapon;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon); // reference to the super ckass
    this.type = type;
  }
  // subclassing
}

const fiona = new Elf("fiona", "stone", "female");

class Ogre extends Character {
  constructor(name, weopon, color) {
    super(name, weopon);
    this.color = color;
  }
  makeFort() {
    return "strongest fort in the world";
  }
}

const shrek = new Ogre("Shrek", "club", "green");
shrek.attack();
