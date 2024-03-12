export default class Character {
    constructor(name, type) {
        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
        if (name.length >= 2 && name.length <= 10) {
            this.name = name;
        }
        else {
            throw new Error('The name must be between 2 and 10 characters');
        }

        if (types.includes(type)) {
            this.type = type;
        }
        else {
            throw new Error('Invalid class type specified');
        }

        this.health = 100;
        this.level = 1;
    }
}

