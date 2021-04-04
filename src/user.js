export default class User {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  mercuryAge() {
    return this.earthAge / .24;
  }

  venusAge() {
    return this.earthAge / .62;
  }
  
  marsAge() {
    return this.earthAge / 1.88;
  }

  jupiterAge() {
    return this.earthAge / 11.86;
  }
}