export default class Jupiter {
  constructor(earthAge, nextPhaseAge) {
    this.earthAge = earthAge;
    this.nextPhaseAge = nextPhaseAge;
  }

  jupiterAge() {
    return this.earthAge / 11.86;
  }

  enterEther() {
    return this.nextPhaseAge / 11.86;
  }

  bonusTime() {
    return this.jupiterAge() - this.enterEther();
  }

  // stringifyTime() {
  //   if (this.earthAge < this.nextPhaseAge) {
  //     return (`You are expected to have `)
  //   }
  // }
}