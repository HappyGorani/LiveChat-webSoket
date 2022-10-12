import { connectDB, getDB } from "../api-util/mongodb";

export const getChat = async () => {
  try {
    await connectDB("livechat");
    const data = getDB().collection("chat").find({}).toArray();
    return data;
  } catch (error) {
    console.log("getChat에 문제가 있습니다." + "::" + error);
    throw { message: error };
  }
};

export const saveChat = async (chat) => {
  try {
    await connectDB("livechat");
    getDB().collection("chat").insertOne({ chat, createdAt: new Date() });
  } catch (error) {
    console.log("saveChat에 문제가 있습니다." + "::" + error);
    throw { message: error };
  }
};
