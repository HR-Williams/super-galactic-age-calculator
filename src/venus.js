export default class Venus {
  constructor(earthAge, nextPhaseAge) {
  this.earthAge = earthAge; 
}

venusAge() {
    return this.earthAge / .62
  }
};
