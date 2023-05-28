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
  
  deleteIncomingServerTransfer = "deleteIncomingServerTransfer",
  createServerTransfer = "createServerTransfer",
  deleteOutgoingServerTransfer = "deleteOutgoingServerTransfer",
};