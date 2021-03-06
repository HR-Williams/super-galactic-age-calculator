export default class Mercury {
  constructor(earthAge, nextPhaseAge) {
    this.earthAge = earthAge;
    this.nextPhaseAge = nextPhaseAge; 
  }

  mercuryAge() {
    return this.earthAge / .24;
  }

  enterEther() {
    return this.nextPhaseAge / .24;
  }

  bonusTime() {
    return this.mercuryAge() - this.enterEther();
  }
}
