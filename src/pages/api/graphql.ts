import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { buildSchema } from "type-graphql";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import { PatientResolver } from "api/schema";

const schema = await buildSchema({
  resolvers: [PatientResolver],
});

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(req: MicroRequest, res: ServerResponse) {
  await startServer;
  await server.createHandler({
    path: "/api/graphql",
  })(req, res);
}
