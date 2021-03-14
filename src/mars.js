export default class Mars {
  constructor(earthAge, nextPhaseAge) {
    this.earthAge = earthAge; 
    this.nextPhaseAge = nextPhaseAge;
  }

  marsAge() {
    return this.earthAge / 1.88
  }

  enterEther() {
    
  }
};
