export default class Jupiter {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  jupiterAge() {
    return this.earthAge / 11.86
  }
};