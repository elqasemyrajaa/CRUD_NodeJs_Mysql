
const connection=require("../config/db");
module.exports= class UserModel{
    constructor(id,namee,email,passworde){
        this.id=id,
        this.namee=namee;
        this.email=email;
        this.passworde=passworde;
    }
 
      static  fetchAll() {
        return connection.execute('SELECT * FROM users');
      }
      static getbyId(id) {
        return connection.execute('SELECT * FROM users WHERE id = ?', [id]);
      }
      static ajouter(namee,email, passworde) {
        const query = 'INSERT INTO users (namee,email, passworde) VALUES (?, ?,?)';
        connection.query(query, [namee,email, passworde]);
      }
      static delete(id) {
        return connection.execute('DELETE FROM users WHERE id = ?', [id]);
      }
      static update(namee,email,passworde,id) {
        return connection.execute('UPDATE users SET namee = ?, email = ?, passworde = ? WHERE id = ?', [namee,email,passworde, id]);
      }


}

