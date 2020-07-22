var connection = require("./connection.js");

class ORM  {
    constructor(connection){
      this.connection = connection
    }
  
    printQuestionMarks(numberOfValuesOrColumns, type){
      const questionMarks = [];
  
      for (var i = 0; i < numberOfValuesOrColumns; i++) {
        if(type === 'cols'){
          questionMarks.push("??");
        } else {
          questionMarks.push("?")
        } 
      }
      return questionMarks.join(', ');

    }

    selectAll(table) {
        //console.log(typeof table);
        const queryString = 'SELECT * FROM  ??';
        return this.connection.query(queryString, [table])
    }

    create(table, variables, values){
        const queryString = `INSERT INTO ??(${variables.join(', ')}) VALUES (${this.printQuestionMarks(values.length)})`
        return this.connection.query(queryString, [table, ...values])
    }

    delete(table, column, value){
        var queryString = `DELETE FROM ?? WHERE ?? = ?`;
    
        return this.connection.query(queryString, [table, column, value] )
    }
};
    module.exports = new ORM(connection);