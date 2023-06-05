import { Router } from "hyper-express";
import { WingsEvents } from "../../structures/WingsEvents";
import type { Wings } from "../../structures/Wings";
import type { Emit } from "../createHyperExpressClient";

export function createHyperExpressRoutesServerFiles({ wings, emit, router }: { wings: Wings, emit: Emit, router: Router }) {
  router.get("/:server/files/contents", (req, res) => {
    // GET /api/servers/:server/files/contents
    emit(WingsEvents.getServerFileContent, req, res);
  });

  router.get("/:server/files/list-directory", (req, res) => {
    // GET /api/servers/:server/files/list-directory
    emit(WingsEvents.getServerFileDirectory, req, res);
  });

  router.put("/:server/files/rename", (req, res) => {
    // PUT /api/servers/:server/files/rename
    emit(WingsEvents.renameServerFiles, req, res);
  });

  router.post("/:server/files/copy", (req, res) => {
    // POST /api/servers/:server/files/copy
    emit(WingsEvents.copyServerFile, req, res);
  });

  router.post("/:server/files/write", (req, res) => {
    // POST /api/servers/:server/files/write
    emit(WingsEvents.writeServerFileContent, req, res);
  });

  router.post("/:server/files/create-directory", (req, res) => {
    // POST /api/servers/:server/files/create-directory
    emit(WingsEvents.createServerFileDirectory, req, res);
  });

  router.post("/:server/files/delete", (req, res) => {
    // POST /api/servers/:server/files/delete
    emit(WingsEvents.deleteServerFile, req, res);
  });

  router.post("/:server/files/compress", (req, res) => {
    // POST /api/servers/:server/files/compress
    emit(WingsEvents.compressServerFiles, req, res);
  });

  router.post("/:server/files/decompress", (req, res) => {
    // POST /api/servers/:server/files/decompress
    emit(WingsEvents.decompressServerFile, req, res);
  });

  router.post("/:server/files/chmod", (req, res) => {
    // POST /api/servers/:server/files/chmod
    emit(WingsEvents.chmodServerFiles, req, res);
  });

  router.get("/:server/files/pull", (req, res) => {
    // GET /api/servers/:server/files/pull
    emit(WingsEvents.getPullServerFile, req, res);
  });

  router.post("/:server/files/pull", (req, res) => {
    // POST /api/servers/:server/files/pull
    emit(WingsEvents.pullServerFile, req, res);
  });

  router.delete("/:server/files/pull/:download", (req, res) => {
    // DELETE /api/servers/:server/files/pull/:download
    emit(WingsEvents.deletePullServerFile, req, res);
  });
}