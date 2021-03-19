export default class User {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  mercuryAge() {
    return this.earthAge / .24;
  }
}