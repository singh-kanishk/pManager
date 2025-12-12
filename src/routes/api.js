import express from "express";
import db from "../db.js";
const router = express.Router();

router.post("/data", (req, res) => {
  const result = req.body;
  console.log(JSON.stringify(result));
  try {
    const insertData = db.prepare(`
    INSERT INTO data (itemName,folderName,url,userName,password,note) VALUES (?,?,?,?,?,?)
    `);
    const info = insertData.run(
      result.itemName,
      result.folderName,
      result.url,
      result.userName,
      result.password,
      result.note
    );
    console.log(`pushing ${JSON.stringify(result)}`);
    res.status(201).json({
      message: "Success",
      id: info.lastInsertRowid,
      itemName:result.itemName
    });
  } 
  catch (e) {
    console.log(e);
    res.status(401).json({
      error: "Failed To Save",
    });
  }
});

export default router;
