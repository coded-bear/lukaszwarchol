import next from "next";
import express from "express";
import router from "./router";
import compression from "compression";
import { Server, Req, Res, Err } from "../utils/types";

const port: number = parseInt(process.env.PORT || "3000", 10);
const dev: boolean = process.env.NODE_ENV !== "production";
const app: any = next({ dev });
const handle: any = app.getRequestHandler();

app.prepare().then(() => {
  const server: Server = express();

  server.use(
    "/static",
    express.static(__dirname + "/static", {
      setHeaders(res) {
        res.setHeader("Cache-Control", "public,max-age=31536000,immutable");
      }
    })
  );
  server.use(
    "/dist",
    express.static(__dirname + "/dist", {
      setHeaders(res) {
        res.setHeader("Cache-Control", "public,max-age=31536000,immutable");
      }
    })
  );
  server.use(compression());

  router(server, app);

  const options: any = { root: __dirname + "/static/", headers: { "Content-Type": "text/xml;charset=UTF-8" } };
  server.get("/sitemap.xml", (_req: Req, res: Res) => res.status(200).sendFile("sitemap.xml", options));
  server.get("/robots.txt", (_req: Req, res: Res) => res.status(200).sendFile("robots.txt", options));

  server.get("*", (req: Req, res: Res) => handle(req, res));

  server.listen(port, (err: Err) => {
    if (err) throw new Error(err);
    console.log(`> Server listening at ${port} port as ${dev ? "development" : process.env.NODE_ENV}`);
  });
});
