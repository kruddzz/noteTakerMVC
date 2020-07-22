const orm = require("../db/orm.js")

class Notes{
    selectAll(){
        return orm.selectAll("notes")
    }

    createNote(values){
        return orm.create("notes", ["title", "text"], values)
    }

    deleteNote(id){
        return orm.delete("notes", "id", id)
    }
}

module.exports = new Notes()