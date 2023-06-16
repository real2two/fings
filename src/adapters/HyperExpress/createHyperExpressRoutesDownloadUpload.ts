import { createWingsResultsObject } from "../createHyperExpressClient";
import { WingsEvents } from "../../structures/WingsEvents";
import type { Router } from "hyper-express";
import type { Wings, WingsResultsUpload } from "../../structures/Wings";
import type { Emit } from "../createHyperExpressClient";

export function createHyperExpressRoutesDownloadUpload({ wings, emit, router }: { wings: Wings, emit: Emit, router: Router }) {
  router.get("/download/backup", (req, res) => {
    // GET /download/backup
    emit(WingsEvents.downloadBackup, req, res);
  });

  router.get("/download/file", (req, res) => {
    // GET /download/file
    emit(WingsEvents.downloadFile, req, res);
  });

  router.post("/upload/file", (req, res) => {
    // POST /upload/file
    res.atomic(async () => {
      const args = createWingsResultsObject({ req, res }) as WingsResultsUpload;
      args.acceptUpload = async save_path => { // save_path is the directory path.
        try {
          let fileReceived = false;
          await req.multipart(async field => {
            if (field.file) {
              console.log(field.file?.name)
              if (!field.file.name) throw new Error("Missing file name");
              fileReceived = true;
              await field.write(`${save_path.endsWith("/") ? save_path.slice(0, -1) : save_path}/${field.file.name}`); // Does this work? Check if this doesn't break folders as well.
            }
          });
          if (!fileReceived) throw new Error("No upload file was recieved");
          return args;
        } catch(err) {
          // Should I add a custom error handler?
          // Probably not, but I'll keep this comment here just in case.
          throw err;
        }
      };
      wings.emit(WingsEvents.uploadFile, args);
    });
  });
}
