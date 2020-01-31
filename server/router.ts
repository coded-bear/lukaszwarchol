import { Server, Req, Res } from "../utils/types";
import { langsList } from "../utils/langService";

const projects = ["LukaszWarchol", "KeepYourTime", "GymFreak"];

export default async function router(server: Server, app: any) {
  server.get("/", async (req: Req, res: Res) => {
    return await app.render(req, res, "/home", req.query);
  });

  langsList.forEach((locale: string) => {
    server.get(`/${locale}`, async (req: Req, res: Res) => {
      return await app.render(req, res, "/home", req.query);
    });

    server.get(`/${locale}/about-me`, async (req: Req, res: Res) => {
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

    projects.forEach((projectName: string) => {
      server.get(`/${locale}/projects/${projectName}`, async (req: Req, res: Res) => {
        return await app.render(req, res, "/project", req.query);
      });
    });
  });
}
