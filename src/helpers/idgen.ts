//  simple id genarator
class IdGenerator {
    currentId: number;
    constructor() {
        this.currentId = 0;
    }

    *id() {
        yield this.currentId++;
    }
}

export default new IdGenerator();