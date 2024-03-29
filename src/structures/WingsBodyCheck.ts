import typia from "typia";
import type {
  DownloadBackupType,
  DownloadFileType,
  UploadFileType,
  RevokeServerJTIsType,
  UpdateConfigurationType,
  GetSystemInformationType,
  GetServerLogsType,
  ChangeServerPowerStateType,
  SendServerCommandType,
  PerformServerInstallType,
  PerformServerReinstallType,
  TriggerServerSyncType,
  CreateServerBackupType,
  RestoreServerBackupType,
  DeleteServerBackupType,
  GetServerFileContentType,
  GetServerFileDirectoryType,
  RenameServerFilesType,
  CopyServerFileType,
  WriteServerFileContentType,
  CreateServerFileDirectoryType,
  DeleteServerFileType,
  CompressServerFilesType,
  DecompressServerFileType,
  ChmodServerFilesType,
  GetPullServerFileType,
  PullServerFileType,
  DeletePullServerFileType,
  GetServersType,
  CreateServerType,
  GetServerDetailsType,
  DeleteServerType,
  StartServerTransferType,
  DeleteIncomingServerTransferType,
  CreateServerTransferType,
  DeleteOutgoingServerTransferType,
} from "./WingsBodyTypes";

export type WingsBodyCheckKeys = // Everything besides openServerConsole.
  "downloadBackup" |
  "downloadFile" |
  "uploadFile" |
  "revokeServerJTIs" |
  "updateConfiguration" |
  "getSystemInformation" |
  "getServerLogs" |
  "changeServerPowerState" |
  "sendServerCommand" |
  "performServerInstall" |
  "performServerReinstall" |
  "triggerServerSync" |
  "createServerBackup" |
  "restoreServerBackup" |
  "deleteServerBackup" |
  "getServerFileContent" |
  "getServerFileDirectory" |
  "renameServerFiles" |
  "copyServerFile" |
  "writeServerFileContent" |
  "createServerFileDirectory" |
  "deleteServerFile" |
  "compressServerFiles" |
  "decompressServerFile" |
  "chmodServerFiles" |
  "getPullServerFile" |
  "pullServerFile" |
  "deletePullServerFile" |
  "getServers" |
  "createServer" |
  "getServerDetails" |
  "deleteServer" |
  "startServerTransfer" |
  "deleteIncomingServerTransfer" |
  "createServerTransfer" |
  "deleteOutgoingServerTransfer";

export const WingsBodyCheck = {
  /**
   * Check if the request values are valid.
   * @param eventName The event name.
   * @param data The values for the event.
   * @returns A boolean determining if the values were correct or not.
   */
  check: (eventName: WingsBodyCheckKeys, data: unknown) => {
    const checkArgTypes = WingsBodyCheck[eventName];
    return typeof checkArgTypes === "function" && checkArgTypes(data);
  },

  downloadBackup: typia.createIs<DownloadBackupType>(),
  downloadFile: typia.createIs<DownloadFileType>(),
  uploadFile: typia.createIs<UploadFileType>(),
  
  revokeServerJTIs: typia.createIs<RevokeServerJTIsType>(),
  
  updateConfiguration: typia.createIs<UpdateConfigurationType>(),
  getSystemInformation: typia.createIs<GetSystemInformationType>(),
  
  getServerLogs: typia.createIs<GetServerLogsType>(),
  changeServerPowerState: typia.createIs<ChangeServerPowerStateType>(),
  sendServerCommand: typia.createIs<SendServerCommandType>(),
  performServerInstall: typia.createIs<PerformServerInstallType>(),
  performServerReinstall: typia.createIs<PerformServerReinstallType>(),
  triggerServerSync: typia.createIs<TriggerServerSyncType>(),
  
  createServerBackup: typia.createIs<CreateServerBackupType>(),
  restoreServerBackup: (() => {
    const restoreServerBackup = typia.createIs<RestoreServerBackupType>();
    return ((input: unknown) => {
      if (!restoreServerBackup(input)) return false;
      if (input.adapter === "s3" && typeof input?.download_url !== "string") return false;
      return true;
    });
  })(),
  deleteServerBackup: typia.createIs<DeleteServerBackupType>(),
  
  getServerFileContent: typia.createIs<GetServerFileContentType>(),
  getServerFileDirectory: typia.createIs<GetServerFileDirectoryType>(),
  renameServerFiles: typia.createIs<RenameServerFilesType>(),
  copyServerFile: typia.createIs<CopyServerFileType>(),
  writeServerFileContent: typia.createIs<WriteServerFileContentType>(),
  createServerFileDirectory: typia.createIs<CreateServerFileDirectoryType>(),
  deleteServerFile: typia.createIs<DeleteServerFileType>(),
  compressServerFiles: typia.createIs<CompressServerFilesType>(),
  decompressServerFile: typia.createIs<DecompressServerFileType>(),
  chmodServerFiles: typia.createIs<ChmodServerFilesType>(),
  getPullServerFile: typia.createIs<GetPullServerFileType>(),
  pullServerFile: typia.createIs<PullServerFileType>(),
  deletePullServerFile: typia.createIs<DeletePullServerFileType>(), 
  
  getServers: typia.createIs<GetServersType>(),
  createServer: typia.createIs<CreateServerType>(),
  getServerDetails: typia.createIs<GetServerDetailsType>(),
  deleteServer: typia.createIs<DeleteServerType>(),
  
  startServerTransfer: typia.createIs<StartServerTransferType>(),
  deleteIncomingServerTransfer: typia.createIs<DeleteIncomingServerTransferType>(),
  createServerTransfer: typia.createIs<CreateServerTransferType>(),
  deleteOutgoingServerTransfer: typia.createIs<DeleteOutgoingServerTransferType>(),
};
