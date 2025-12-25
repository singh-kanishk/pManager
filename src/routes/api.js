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
      itemName: result.itemName,
    });
  } catch (e) {
    console.log(e);
    res.status(401).json({
      error: "Failed To Save",
    });
  }
});
router.get("/data", (req, res) => {
  try {
    const pageNumber = parseInt(req.query.page) || 1;
    const limit = 20;
    let offset = (pageNumber - 1) * limit;
    const getData = db.prepare(
      `SELECT itemName,itemId as id FROM data LIMIT ? OFFSET ?`
    );
    const receivedData = getData.all(limit, offset);

    res.json(receivedData).status(201);
  } catch (e) {
    console.error(e);
    res.status(404).json({
      message: `error while fetching data`,
    });
  }
});

const getItemWithID = db.prepare(`SELECT * FROM data WHERE itemId= ?`);
router.get("/data/:itemId", (req, res) => {
  try {
    const getItemId = parseInt(req.params.itemId);
    const object = getItemWithID.get(getItemId);
    res.status(201).json(object);
  } catch (e) {
    res.status(404).json({
      message:'Wrong ID'
    })
  }
});

export default router;
