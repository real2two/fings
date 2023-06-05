export const WingsEventsJWT = [
  "downloadBackup",
  "downloadFile",
  "uploadFile",

  "openServerConsole",
  
  "startServerTransfer",
];

export enum WingsEvents {
  downloadBackup = "downloadBackup",
  downloadFile = "downloadFile",
  uploadFile = "uploadFile",

  openServerConsole = "openServerConsole",
  revokeServerJTIs = "revokeServerJTIs",

  updateConfiguration = "updateConfiguration",
  getSystemInformation = "getSystemInformation",

  getServerLogs = "getServerLogs",
  changeServerPowerState = "changeServerPowerState",
  sendServerCommand = "sendServerCommand",
  performServerInstall = "performServerInstall",
  performServerReinstall = "performServerReinstall",
  triggerServerSync = "triggerServerSync",
  
  createServerBackup = "createServerBackup",
  restoreServerBackup = "restoreServerBackup",
  deleteServerBackup = "deleteServerBackup",

  getServerFileContent = "getServerFileContent",
  getServerFileDirectory = "getServerFileDirectory",
  renameServerFiles = "renameServerFiles",
  copyServerFile = "copyServerFile",
  writeServerFileContent = "writeServerFileContent",
  createServerFileDirectory = "createServerFileDirectory",
  deleteServerFile = "deleteServerFile",
  compressServerFiles = "compressServerFiles",
  decompressServerFile = "decompressServerFile",
  chmodServerFiles = "chmodServerFiles",
  getPullServerFile = "getPullServerFile",
  pullServerFile = "pullServerFile",
  deletePullServerFile = "deletePullServerFile" ,

  getServers = "getServers",
  deleteServer = "deleteServer",
  
  startServerTransfer = "startServerTransfer", // POST /api/transfers
  deleteIncomingServerTransfer = "deleteIncomingServerTransfer", // DELETE /api/transfers/:server
  createServerTransfer = "createServerTransfer", // POST /api/servers/:server/transfer
  deleteOutgoingServerTransfer = "deleteOutgoingServerTransfer", // DELETE /api/servers/:server/transfer
}
