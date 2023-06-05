import { Router } from "hyper-express";
import type { Wings } from "../../structures/Wings";
import type { Emit } from "../createHyperExpressClient";

export function createHyperExpressRoutesServerFiles({ wings, emit, router }: { wings: Wings, emit: Emit, router: Router }) {
  router.get("/:server/files/contents", (req, res) => {
    // GET /api/servers/:server/files/contents
  });

  router.get("/:server/files/list-directory", (req, res) => {
    // GET /api/servers/:server/files/list-directory
  });

  router.put("/:server/files/rename", (req, res) => {
    // PUT /api/servers/:server/files/rename
  });

  router.post("/:server/files/copy", (req, res) => {
    // POST /api/servers/:server/files/copy
  });

  router.post("/:server/files/write", (req, res) => {
    // POST /api/servers/:server/files/write
  });

  router.post("/:server/files/create-directory", (req, res) => {
    // POST /api/servers/:server/files/create-directory
  });

  router.post("/:server/files/delete", (req, res) => {
    // POST /api/servers/:server/files/delete
  });

  router.post("/:server/files/compress", (req, res) => {
    // POST /api/servers/:server/files/compress
  });

  router.post("/:server/files/decompress", (req, res) => {
    // POST /api/servers/:server/files/decompress
  });

  router.post("/:server/files/chmod", (req, res) => {
    // POST /api/servers/:server/files/chmod
  });

  router.get("/:server/files/pull", (req, res) => {
    // GET /api/servers/:server/files/pull
  });

  router.post("/:server/files/pull", (req, res) => {
    // POST /api/servers/:server/files/pull
  });

  router.delete("/:server/files/pull/:download", (req, res) => {
    // DELETE /api/servers/:server/files/pull/:download
  });
}