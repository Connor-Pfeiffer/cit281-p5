/*
    CIT 281 Project 5:
    Name: Connor Pfeiffer
*/

module.exports = class Monster {
    constructor({monsterName = "Unknown", minimumLife = 0, maximumLife = 100, currentLife}) {
        this.monsterName = monsterName;
        this.minimumLife = minimumLife;
        this.maximumLife = maximumLife;
        this.currentLife = currentLife; // now works
        this.isAlive = currentLife >= minimumLife;
    }

    updateLife = (lifeChangeAmount) => {
        this.currentLife += lifeChangeAmount;
        this.currentLife = this.currentLife < 10 ? 0 : this.currentLife;
        this.isAlive = this.currentLife > this.minimumLife
    }

    ///*
   
    randomLifeDrain = (minimumLifeDrain, maximumLifeDrain) => {
        let lifeSteal = Math.floor(Math.random() * (maximumLifeDrain - minimumLifeDrain + 1) + minimumLifeDrain) ;
        console.log(`${this.monsterName} random power drain of ` + lifeSteal);
        this.updateLife(Math.abs(lifeSteal) * -1);
    }
    //*/
}
