const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMsgs: []
        }
    },
    computed: {
        monsterBarStyle() {
            if (this.monsterHealth < 0) {
                return {width: '0%'}
            }
            else {
                return {width: this.monsterHealth + '%'}
            }
        },
        playerBarStyle() {
            if (this.playerHealth < 0) {
                return {width: '0%'}
            }
            else {
                return {width: this.playerHealth + '%'};
            }
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            }
            else if(value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            }
            else if(value <= 0) {
                this.winner = 'player';
            }
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12)
            this.monsterHealth -= attackValue;
            this.addLogMsg('player', 'attack', attackValue);
            this.attackPlayer();
        },

        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMsg('monster', 'attack', attackValue);
        },

        specialAttack() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.addLogMsg('player', 'special-attack', attackValue);
            this.attackPlayer();
        },

        healPlayer() {
            this.currentRound++;
            const healval = getRandomValue(8, 20);
            this.playerHealth + healval <= 100 ? this.playerHealth += healval : this.playerHealth = 100;
            this.addLogMsg('player', 'heal', healval);
            this.attackPlayer();
        },
        newGame() {
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.currentRound = 0,
            this.winner = null,
            this.logMsgs = []
        },

        surrender() {
            this.winner = 'monster';
        },

        addLogMsg(who, what, val) {
            this.logMsgs.unshift({
                actionBy: who,
                actionType: what,
                actionVal: val
            });
        }
    }
}).mount('#game');