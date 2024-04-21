class Hero {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.canFly = false;
    this.shield = false;
  }

  attacked(damage) {
    if (this.canFly) {
      // verify if the hero can fly
      let chance = Math.random();
      if (chance > 0.5) {
        // if the hero has more than 50% chances of flying the damage will be 0
        console.log(this.name + " flew away!");
        damage = 0;
      }

      if (this.shield) {
        // we verify if the hero has a shield
        console.log(this.name + " defended with a shield!");
        damage = damage * 0.8;
      }

      this.hp = this.hp - damage;
      console.log(
        this.name +
          " has been attacke! HP reduced by: " +
          damage +
          ". " +
          "HP remaining: " +
          this.hp +
          "."
      );
    }
  }
}

class Dwarf extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.shield = true;
  }

  attack(otherHero) {
    let damage = 10;
    console.log(this.name + " attacked with damage: " + damage + " .");
    otherHero.attacked(damage);
  }
}

class Sprite extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
  }

  attack(otherHero) {
    let damage = 15;
    console.log(this.name + " attacked with damage: " + damage + " .");
    otherHero.attacked(damage);
  }
}

class Dragon extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.shield = true;
    this.canFly = true;
  }

  attack(otherHero) {
    let damage = 5;
    console.log(this.name + " attacked with damage: " + damage + " .");
    otherHero.attacked(damage);
  }
}

class Fight {
  constructor(hero1, hero2) {
    this.hero1 = hero1;
    this.hero2 = hero2;
    this.turn = 0; // all heroes start from turn 0, turns are used to know who's hero's turn is, can be 0 or 1
  }

  performAttack() {
    if (this.turn === 0) {
      this.hero1.attack(this.hero2);
    } else {
      this.hero2.attack(this.hero1);
    }
  }

  changeTurn() {
    this.turn = 1 - this.turn; //toggles the turn, if the turn was 1 it will do 1-1 so it goes back to 0
  }

  findWinner() {
    let findWinner = "";

    if (this.hero1.hp > 0) {
      findWinner = this.hero1.name + " won with " + this.hero1.hp + ".";
      console.log(findWinner);
      return findWinner;
    } else if (this.hero2.hp > 0) {
      findWinner = this.hero2.name + " won with " + this.hero2.hp + ".";
      console.log(findWinner);
      return findWinner;
    } else {
      findWinner = "No heroes left alive.";
      console.log(findWinner);
      return findWinner;
    }
  }

  go() {
    do {
      this.performAttack();
      this.changeTurn();
    } while (this.hero1.hp > 0 && this.hero2.hp > 0);
    this.findWinner();
  }
}

let mysabo = new Dragon("Sabo", 350);
let myluffy = new Dwarf("Luffy", 400);
let myace = new Sprite("ACE", 500);

let epicfight = new Fight(myace, myluffy);
epicfight.go();
