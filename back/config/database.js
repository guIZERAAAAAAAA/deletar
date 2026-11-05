import {Sequelize} from "sequelize"

class Database {
    constructor () {
        this.init ()

    }
    init () {
        this.db = new Sequelize ({

        })
    }
} 
export default new Database ()