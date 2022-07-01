//constructor function
function Character(name, strength, health) {
  this.name = name;
  this.strength = strength;
  this.health = health;
  this.elements = new UIElements(this.name);

  this.attackBtn = document.querySelector(`#${this.name}-attack`);
  this.healthBtn = document.querySelector(`#${this.name}-make-health`);
  this.alive = document.querySelector(`#${this.name}-alive`);
  this.progress = document.querySelector(`.${this.name}-health`);
}

function UIElements(name) {
  this.attackBtn = document.querySelector(`#${name}-attack`);
  this.healthBtn = document.querySelector(`#${name}-make-health`);
  this.alive = document.querySelector(`#${name}-alive`);
  this.progress = document.querySelector(`.${name}-health`);
}

//Methods in prototype
Character.prototype.attack = function (opponent) {
  //this(naruto)
  //opponent(saruto)
  if (opponent.health > 0) {
    opponent.health -= this.strength;
    opponent.elements.progress.style.width = `${opponent.health}%`;
  } else {
    opponent.elements.attackBtn.remove();
    opponent.elements.healthBtn.remove();
    opponent.elements.alive.innerHTML = `${opponent.name} is died`;
  }
};

Character.prototype.status = function () {
  console.log(`Name:${this.name}`);
  console.log(`strength:${this.strength}`);
  console.log(`health:${this.health}`);
};

Character.prototype.makeHealth = function () {
  if (this.health < 100) {
    this.health += 10;
    this.elements.progress.style.width = `${this.health}%`;
  }
  if (this.health > 100) {
    this.health = 100;
  }
};

let naruto = new Character("naruto", 10, 100);
let saruto = new Character("saruto", 5, 100);

naruto.elements.attackBtn.addEventListener("click", function () {
  naruto.attack(saruto);
});

saruto.elements.attackBtn.addEventListener("click", function () {
  saruto.attack(naruto);
});

naruto.elements.healthBtn.addEventListener("click", function () {
  naruto.makeHealth();
});

saruto.elements.healthBtn.addEventListener("click", function () {
  saruto.makeHealth();
});
