const BlockTree = require("../bsp/blockTree");
const helper = require("../bsp/helper");
const { Position } = require("../../hlt/positionals");

class BinarySpaceBotStrategy {
    constructor() {
        this.HALITE_BLOCK_MAX = 10000;
        this.MAX_SHIPS_PER_BLOCK = 2;
        this.IDEAL_CAPACITY = 700;
        this.TURNS_TO_RECREATE = 500;
        this.tree = null;
    }

    setLogger(logger) {
        this.logger = logger;
    }

    setParameters([
        haliteBlockMax = 10000,
        maxShips = 2,
        idealCapacity = 700,
        turnsToRecreate = 500
    ]) {
        this.HALITE_BLOCK_MAX = parseInt(haliteBlockMax);
        this.MAX_SHIPS_PER_BLOCK = parseInt(maxShips);
        this.IDEAL_CAPACITY = parseInt(idealCapacity);
        this.TURNS_TO_RECREATE = parseInt(turnsToRecreate);
    }

    getNextMoves(game) {
        if (
            game.turnNumber === 1 ||
            game.turnNumber % this.TURNS_TO_RECREATE == 0
        ) {
            this.tree = new BlockTree(game.gameMap, this.HALITE_BLOCK_MAX);
        }

        return ["N"];
    }
}
module.exports = BinarySpaceBotStrategy;
