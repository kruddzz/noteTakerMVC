const orm = require("../config/orm")

class Notes{
    selectAll(){
        return orm.selectAll("note")
    }

    createNote(values){
        return orm.create("note", ["title", "text"], values)
    }

    deleteNote(value){
        return orm.delete("note", "id", value)
    }
}

module.exports = new Notes()