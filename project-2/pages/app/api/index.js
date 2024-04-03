import { ApolloServer } from "apollo-server-express";
import express from "express";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolver.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
async function initServer() {
  const app = express();
  app.use(cors());
  dotenv.config();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  try {
    await mongoose.connect(process.env.mongodb);
    console.log("connect database");
  } catch (error) {
    console.log(error);
  }
  app.use((req, res) => {
    res.send("server started succesfully");
  });
  const PORT = process.env.PORT || 8001;
  app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
  });
}
initServer();
console.log("asd");