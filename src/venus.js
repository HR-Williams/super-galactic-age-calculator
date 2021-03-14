export default class Venus {
  constructor(earthAge, nextPhaseAge) {
    this.earthAge = earthAge;
    this.nextPhaseAge = nextPhaseAge; 
  }

  venusAge() {
    return this.earthAge / .62;
  }

  enterEther() {
    return this.nextPhaseAge / .62;
  }

  bonusTime() {
    return this.venusAge() - this.enterEther();
  }
}
