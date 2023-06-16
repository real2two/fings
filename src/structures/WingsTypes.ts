export interface DownloadBackupType { // GET /download/backup

}

export interface DownloadFileType { // GET /download/file

}

export interface UploadFileType { // POST /upload/file

}

export interface RevokeServerJTIsType { // POST /api/servers/:server/ws/deny

}

export interface UpdateConfigurationType { // POST /api/update

}

export interface GetSystemInformationType { // GET /api/system

}

export interface GetServerLogsType { // GET /api/servers/:server/logs

}

export interface ChangeServerPowerStateType { // POST /api/servers/:server/power

}

export interface SendServerCommandType { // POST /api/servers/:server/commands

}

export interface PerformServerInstallType { // POST /api/servers/:server/install

}

export interface PerformServerReinstallType { // POST /api/servers/:server/reinstall

}

export interface TriggerServerSyncType { // POST /api/servers/:server/sync

}

export interface CreateServerBackupType { // POST /api/servers/:server/backup

}

export interface RestoreServerBackupType { // POST /api/servers/:server/backup/:backup/restore

}

export interface DeleteServerBackupType { // DELETE /api/servers/:server/backup/:backup

}

export interface GetServerFileContentType { // GET /api/servers/:server/files/contents

}

export interface GetServerFileDirectoryType { // GET /api/servers/:server/files/list-directory

}

export interface RenameServerFilesType { // PUT /api/servers/:server/files/rename

}

export interface CopyServerFileType { // POST /api/servers/:server/files/copy

}

export interface WriteServerFileContentType { // POST /api/servers/:server/files/write

}

export interface CreateServerFileDirectoryType { // POST /api/servers/:server/files/create-directory

}

export interface DeleteServerFileType { // POST /api/servers/:server/files/delete

}

export interface CompressServerFilesType { // POST /api/servers/:server/files/compress

}

export interface DecompressServerFileType { // POST /api/servers/:server/files/decompress

}

export interface ChmodServerFilesType { // POST /api/servers/:server/files/chmod

}

export interface GetPullServerFileType { // GET /api/servers/:server/files/pull

}

export interface PullServerFileType { // POST /api/servers/:server/files/pull

}

export interface DeletePullServerFileType { // DELETE /api/servers/:server/files/pull/:download

}

export interface GetServersType { // GET /api/servers

}

export interface CreateServerType { // POST /api/servers

}

export interface GetServerDetailsType { // GET /api/servers/:server

}

export interface DeleteServerType { // DELETE /api/servers/:server

}

export interface StartServerTransferType { // POST /api/transfers

}

export interface DeleteIncomingServerTransferType { // DELETE /api/transfers/:server

}

export interface CreateServerTransferType { // POST /api/servers/:server/transfer

}

export interface DeleteOutgoingServerTransferType { // DELETE /api/servers/:server/transfer

}
