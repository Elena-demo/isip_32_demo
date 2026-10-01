import mysql from 'mysql2'

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'demo_isip_32'
})

db.connect((err)=>{
    if(err){
        console.error(err);
        return
    }

    console.log("Подключена");
    
})



export default db 