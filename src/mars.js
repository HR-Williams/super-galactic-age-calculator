export default class Mars {
  constructor(earthAge) {
    this.earthAge = earthAge; 
  }

  marsAge() {
    return this.earthAge / 1.88
  }
};
