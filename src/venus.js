export default class Venus {
  constructor(earthAge) {
  this.earthAge = earthAge; 
}

venusAge() {
    return this.earthAge / .62
  }
};
