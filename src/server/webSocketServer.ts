import ws from "ws";
import { applyWSSHandler } from "@trpc/server/adapters/ws";
import { appRouter } from "./router";
import { createContext } from "./router/context";

const webSocketSecure = new ws.Server({
  port: 3001,
});

const handler = applyWSSHandler({
  webSocketSecure,
  createContext,
  router: appRouter,
});

webSocketSecure.on("connection", () => {
  console.log(` ++ opened established ${ws.clients.size}`);

  webSocketSecure.on("close", () => {
    console.log(` -- closed connection ${ws.clients.size}`);
  });
});
console.log(` web socket secure connection established`);

process.on("SIGTERM", () => {
  console.log("SIGTERM received");
  handler.broadcastReconnectNotification();

  webSocketSecure.close();
});
