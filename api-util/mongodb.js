import { MongoClient } from "mongodb";
let db;
export const connectDB = async (databaseName) => {
  const client = await MongoClient.connect("mongodb://172.17.0.1:27017");
  // const client = await MongoClient.connect("mongodb://localhost:27017");
  db = client.db(databaseName);
};
export const getDB = () => {
  if (!db) {
    console.log("데이터베이스 연결에 이상이 있습니다.");
  }
  return db;
};
