import { Server, Req, Res } from "../common/utils/types";

export default async function router(server: Server, app: any) {
  server.get("/", async (req: Req, res: Res) => {
    return await app.render(req, res, "/home", req.query);
  });

  server.get("/about", async (req: Req, res: Res) => {
    return await app.render(req, res, "/about", req.query);
  });

  server.get("/services", async (req: Req, res: Res) => {
    return await app.render(req, res, "/services", req.query);
  });

  server.get("/projects", async (req: Req, res: Res) => {
    return await app.render(req, res, "/projects", req.query);
  });

  server.get("/contact", async (req: Req, res: Res) => {
    return await app.render(req, res, "/contact", req.query);
  });

  server.get("/privacy-policy", async (req: Req, res: Res) => {
    return await app.render(req, res, "/privacyPolicy", req.query);
  });
}
