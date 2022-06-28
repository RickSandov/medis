import mongoose from "mongoose";

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongoConnection.isConnected) {
    // connected to mongoDB
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected == 1) {
      // using exisiting conection
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URI || "");
  mongoConnection.isConnected = 1;
  //   console.log("Connected to MongoDB", process.env.MONGO_URI);
  // connected to mongoDB
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === "development") return;

  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  //   console.log("MongoDB disconnected");
  // disconnected
};
