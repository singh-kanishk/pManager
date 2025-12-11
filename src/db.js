import Database from "better-sqlite3";
const db=new Database('database/kanishk.db', { verbose: console.log })

db.exec(`
    
    CREATE TABLE IF NOT EXISTS data(
        itemId INTEGER PRIMARY KEY,
        itemName TEXT NOT NULL,
        folderName TEXT,
        url TEXT,
        userName TEXT NOT NULL,
        password TEXT NOT NULL
    )    
    `)


export default db