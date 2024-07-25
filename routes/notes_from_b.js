var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加
//require('dotenv').config();

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri =  "mongodb+srv://TT520804:TT520804@cluster0.9mff2yj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

// corsミドルウェアを使用
router.use(cors());

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');


// 全てのドキュメントを取得
const note = await notes.find({}).toArray();

res.json(note);
})

module.exports = router;
