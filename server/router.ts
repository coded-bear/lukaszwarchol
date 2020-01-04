import { Server, Req, Res } from "../utils/types";
import { langsList } from "../utils/langService";

export default async function router(server: Server, app: any) {
  server.get("/", async (req: Req, res: Res) => {
    return await app.render(req, res, "/home", req.query);
  });

  langsList.forEach(locale => {
    server.get(`/${locale}`, async (req: Req, res: Res) => {
      return await app.render(req, res, "/home", req.query);
    });

    server.get(`/${locale}/about`, async (req: Req, res: Res) => {
      return await app.render(req, res, "/about", req.query);
    });

    server.get(`/${locale}/services`, async (req: Req, res: Res) => {
      return await app.render(req, res, "/services", req.query);
    });

    server.get(`/${locale}/projects`, async (req: Req, res: Res) => {
      return await app.render(req, res, "/projects", req.query);
    });

    server.get(`/${locale}/contact`, async (req: Req, res: Res) => {
      return await app.render(req, res, "/contact", req.query);
    });
  });
}
