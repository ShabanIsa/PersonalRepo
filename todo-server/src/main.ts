import * as http from "http";
import { app } from "./app";

const PORT = 8080;
const server = http.createServer(app);
server.listen(PORT);
server.on("listening", () => {
    console.info(`Listening on port ${PORT}`);
});
