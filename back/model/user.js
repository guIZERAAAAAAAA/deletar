import { type } from "node:os"
import database from "../config/database.js"
import { INTEGER } from "sequelize"

class User {
constructor(){
    this.model = database.db.define("user", {
        id:{
            authoIncrement:true,
            primaryKey:true,
            type:database.db.Sequelize.INTEGER
        },
        id:{
            allowNull:database.db.Sequelize.STRING,
            type:false
        },
        name:{
            allowNull:database.db.Sequelize.STRING,
            type:false
        },
        password:{
            allowNull:database.db.Sequelize.STRING,
            type:false
        },
        email:{
            allowNull:database.db.Sequelize.STRING,
            type:false
        }
    })
}


} 

export default User().model