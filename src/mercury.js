export default class Mercury {
  constructor(earthAge, nextPhaseAge) {
  this.earthAge = earthAge; 
  }

mercuryAge() {
  return this.earthAge / .24
  }
};
