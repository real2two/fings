import type { DownloadBackupType, DownloadFileType, UploadFileType, RevokeServerJTIsType, UpdateConfigurationType, GetSystemInformationType, GetServerLogsType, ChangeServerPowerStateType, SendServerCommandType, PerformServerInstallType, PerformServerReinstallType, TriggerServerSyncType, CreateServerBackupType, DeleteServerBackupType, GetServerFileContentType, GetServerFileDirectoryType, RenameServerFilesType, CopyServerFileType, WriteServerFileContentType, CreateServerFileDirectoryType, DeleteServerFileType, CompressServerFilesType, DecompressServerFileType, ChmodServerFilesType, GetPullServerFileType, PullServerFileType, DeletePullServerFileType, GetServersType, CreateServerType, GetServerDetailsType, DeleteServerType, StartServerTransferType, DeleteIncomingServerTransferType, CreateServerTransferType, DeleteOutgoingServerTransferType } from "./WingsBodyTypes";
export type WingsBodyCheckKeys = // Everything besides openServerConsole.
"downloadBackup" | "downloadFile" | "uploadFile" | "revokeServerJTIs" | "updateConfiguration" | "getSystemInformation" | "getServerLogs" | "changeServerPowerState" | "sendServerCommand" | "performServerInstall" | "performServerReinstall" | "triggerServerSync" | "createServerBackup" | "restoreServerBackup" | "deleteServerBackup" | "getServerFileContent" | "getServerFileDirectory" | "renameServerFiles" | "copyServerFile" | "writeServerFileContent" | "createServerFileDirectory" | "deleteServerFile" | "compressServerFiles" | "decompressServerFile" | "chmodServerFiles" | "getPullServerFile" | "pullServerFile" | "deletePullServerFile" | "getServers" | "createServer" | "getServerDetails" | "deleteServer" | "startServerTransfer" | "deleteIncomingServerTransfer" | "createServerTransfer" | "deleteOutgoingServerTransfer";
export declare const WingsBodyCheck: {
    /**
     * Check if the request values are valid.
     * @param eventName The event name.
     * @param data The values for the event.
     * @returns A boolean determining if the values were correct or not.
     */
    check: (eventName: WingsBodyCheckKeys, data: unknown) => boolean;
    downloadBackup: (input: unknown) => input is DownloadBackupType;
    downloadFile: (input: unknown) => input is DownloadFileType;
    uploadFile: (input: unknown) => input is UploadFileType;
    revokeServerJTIs: (input: unknown) => input is RevokeServerJTIsType;
    updateConfiguration: (input: unknown) => input is UpdateConfigurationType;
    getSystemInformation: (input: unknown) => input is GetSystemInformationType;
    getServerLogs: (input: unknown) => input is GetServerLogsType;
    changeServerPowerState: (input: unknown) => input is ChangeServerPowerStateType;
    sendServerCommand: (input: unknown) => input is SendServerCommandType;
    performServerInstall: (input: unknown) => input is PerformServerInstallType;
    performServerReinstall: (input: unknown) => input is PerformServerReinstallType;
    triggerServerSync: (input: unknown) => input is TriggerServerSyncType;
    createServerBackup: (input: unknown) => input is CreateServerBackupType;
    restoreServerBackup: (input: unknown) => boolean;
    deleteServerBackup: (input: unknown) => input is DeleteServerBackupType;
    getServerFileContent: (input: unknown) => input is GetServerFileContentType;
    getServerFileDirectory: (input: unknown) => input is GetServerFileDirectoryType;
    renameServerFiles: (input: unknown) => input is RenameServerFilesType;
    copyServerFile: (input: unknown) => input is CopyServerFileType;
    writeServerFileContent: (input: unknown) => input is WriteServerFileContentType;
    createServerFileDirectory: (input: unknown) => input is CreateServerFileDirectoryType;
    deleteServerFile: (input: unknown) => input is DeleteServerFileType;
    compressServerFiles: (input: unknown) => input is CompressServerFilesType;
    decompressServerFile: (input: unknown) => input is DecompressServerFileType;
    chmodServerFiles: (input: unknown) => input is ChmodServerFilesType;
    getPullServerFile: (input: unknown) => input is GetPullServerFileType;
    pullServerFile: (input: unknown) => input is PullServerFileType;
    deletePullServerFile: (input: unknown) => input is DeletePullServerFileType;
    getServers: (input: unknown) => input is GetServersType;
    createServer: (input: unknown) => input is CreateServerType;
    getServerDetails: (input: unknown) => input is GetServerDetailsType;
    deleteServer: (input: unknown) => input is DeleteServerType;
    startServerTransfer: (input: unknown) => input is StartServerTransferType;
    deleteIncomingServerTransfer: (input: unknown) => input is DeleteIncomingServerTransferType;
    createServerTransfer: (input: unknown) => input is CreateServerTransferType;
    deleteOutgoingServerTransfer: (input: unknown) => input is DeleteOutgoingServerTransferType;
};
