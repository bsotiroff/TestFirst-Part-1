function Pokemon(name, health, attackBonus) {
  this.name = name;
  this.health = health;
  this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function() {
  return this.attackBonus + 2;
};

Pokemon.prototype.isDefeated = function() {
  if (this.health >= 1) {
    return false;
  }
  return true;
};

pikachu = new Pokemon('Pikachu', 250, 4);

charizard = new Pokemon('Charizard', 500, 5);

const simulateBattle = (pokemon1, pokemon2, firstMove) => {
  //1stmove attacks the other pokemon

  while (pokemon1.isDefeated() === false && pokemon2.isDefeated() === false) {
    if (pokemon1 === firstMove) {
      //pokemon1 is firstmove

      pokemon2.health -= pokemon1.biteAttack();
      pokemon1.health -= pokemon2.biteAttack();
    } else {
      //pokemon2 is 1stmove
      pokemon1.health -= pokemon2.biteAttack();
      pokemon2.health -= pokemon1.biteAttack();
    }
  }

  if (pokemon1.isDefeated() === true) {
    return `${pokemon2.name} Wins!`;
  }

  if (pokemon2.isDefeated() === true) {
    return `${pokemon1.name} Wins!`;
  }
};
//trade blows until there is a winner
