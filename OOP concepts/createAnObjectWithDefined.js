function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function () {
  return "Attack with " + this.weapon;
};

const elfMan = new Elf("santa", "stick");

elfMan.name;

Elf.prototype.build = function () {
  return "house";
};

//
