import express from "express";
import db from "../db";
const router = express.Router();

router.post("/data", (req, res) => {
  const result = req.body;
  try {
    const insertData = db.prepare(`
    INSERT INTO data (itemName,folderName,url,userName,password) VALUES (?,?,?,?,?)
    `);
    const info=insertData.run(result.itemName,result.folderName,result.url,result.userName,result.password)
    res.status(201).json({ 
        message: "Success", 
        id: info.lastInsertRowid 
    });
  } catch (e) {
    console.log(e);
    res.status(401).json(
        {
            error:'Failed To Save'
        }
    )
  }
});

export default router;
