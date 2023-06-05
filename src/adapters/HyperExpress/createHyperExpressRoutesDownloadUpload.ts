import type { Router } from "hyper-express";
import type { Wings } from "../../structures/Wings";
import type { Emit } from "../createHyperExpressClient";

export function createHyperExpressRoutesDownloadUpload({ wings, emit, router }: { wings: Wings, emit: Emit, router: Router }) {
  router.get("/download/backup", (req, res) => {
    // GET /download/backup
  });

  router.get("/download/file", (req, res) => {
    // GET /download/file
  });

  router.post("/upload/file", (req, res) => {
    // POST /upload/file
  });
}