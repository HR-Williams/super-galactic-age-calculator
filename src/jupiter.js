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

  stringifyTime() {
    let userEtherTime = (this.enterEther() - this.jupiterAge());
    let userBonusTime =(this.jupiterAge() - this.enterEther());
    if (this.earthAge < this.nextPhaseAge) {
      return (`You are expected to have ${userEtherTime} more Jupiter years until you will leave your body to enter the ether.`);
    } else {
      return  (`You have accrued ${userBonusTime} Jupiter years of Bonus time.`);
    }
  }
}