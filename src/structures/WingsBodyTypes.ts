export interface DownloadBackupType { // GET /download/backup
  query: {
    server_uuid: string;
    backup_uuid: string;
    unique_id: string;
  }
}

export interface DownloadFileType { // GET /download/file
  query: {
    file_path: string;
    server_uuid: string;
    unique_id: string;
  }
}

export interface UploadFileType { // POST /upload/file
  headers: {
    "Content-Type": "multipart/form-data";
  }
  query: {
    server_uuid: string;
    user_uuid: string;
    unique_id: string;
  }
}

export interface RevokeServerJTIsType { // POST /api/servers/:server/ws/deny
  body: {
    jtis: string[];
  }
}

export interface UpdateConfigurationType { // POST /api/update
  body: {
    debug: boolean;
    uuid: string;
    token_id: string;
    token: string;
    api: {
      host: string;
      port: number;
      sll: {
        enabled: boolean;
        cert: string;
        key: string;
      }
      upload_limit: number;
    },
    system: {
      data: string;
      sftp: {
        bind_port: number;
      }
    },
    allowed_mounts: string[]
    remote: string;
  }
}

export interface GetSystemInformationType { // GET /api/system
  query: {
    v?: string;
  }
}

export interface GetServerLogsType { // GET /api/servers/:server/logs
  query: {
    size?: string;
  }
}

export interface ChangeServerPowerStateType { // POST /api/servers/:server/power
  body: {
    action: "start" | "stop" | "kill" | "restart";
    wait_seconds: number;
  }
}

export interface SendServerCommandType { // POST /api/servers/:server/commands
  body: {
    commands: string[]
  }
}

export interface PerformServerInstallType {} // POST /api/servers/:server/install

export interface PerformServerReinstallType {} // POST /api/servers/:server/reinstall

export interface TriggerServerSyncType {} // POST /api/servers/:server/sync

export interface CreateServerBackupType { // POST /api/servers/:server/backup
  body: {
    adapter: "wings" | "s3";
    uuid: string;
    ignore: string;
  }
}

export interface RestoreServerBackupType {
  download_url: any;
  adapter: string; // POST /api/servers/:server/backup/:backup/restore
  body: {
    adapter: "wings" | "s3";
    truncate_directory: boolean;
    download_url?: string;
  }
}

export interface DeleteServerBackupType {} // DELETE /api/servers/:server/backup/:backup

export interface GetServerFileContentType { // GET /api/servers/:server/files/contents
  query: {
    download?: string;
    file: string;
  }
}

export interface GetServerFileDirectoryType { // GET /api/servers/:server/files/list-directory
  query: {
    directory: string;
  }
}

export interface RenameServerFilesType { // PUT /api/servers/:server/files/rename
  body: {
    root: string;
    files: {
      from: string;
      to: string;
    }[]
  }
}

export interface CopyServerFileType { // POST /api/servers/:server/files/copy
  body: {
    location: string;
  }
}

export interface WriteServerFileContentType { // POST /api/servers/:server/files/write
  headers: {
    "Content-Type": "text/plain"
  }
  query: {
    file: string;
  }
}

export interface CreateServerFileDirectoryType { // POST /api/servers/:server/files/create-directory
  body: {
    name: string;
    path: string;
  }
}

export interface DeleteServerFileType { // POST /api/servers/:server/files/delete
  body: {
    files: string[];
    root: string;
  }
}

export interface CompressServerFilesType { // POST /api/servers/:server/files/compress
  body: {
    files: string[];
    root: string;
  }
}

export interface DecompressServerFileType { // POST /api/servers/:server/files/decompress
  body: {
    file: string;
    root: string;
  }
}

export interface ChmodServerFilesType { // POST /api/servers/:server/files/chmod
  body: {
    root: string;
    files: {
      file: string;
      mode: number;
    }[]
  }
}

export interface GetPullServerFileType {} // GET /api/servers/:server/files/pull

export interface PullServerFileType { // POST /api/servers/:server/files/pull
  body: {
    url: string;
    directory?: string;
    file_name: string;
    foreground?: boolean;
    root: string;
    use_header: boolean;
  }
}

export interface DeletePullServerFileType {} // DELETE /api/servers/:server/files/pull/:download

export interface GetServersType {} // GET /api/servers

export interface CreateServerType { // POST /api/servers
  body: {
    uuid: string;
    start_on_completion: boolean;
  }
}

export interface GetServerDetailsType {} // GET /api/servers/:server

export interface DeleteServerType {} // DELETE /api/servers/:server

export interface StartServerTransferType { // POST /api/transfers
  body: {
    url: string;
    token: string;
    server?: {
      uuid: string;
      start_on_completion: boolean;
    }
  }
}

export interface DeleteIncomingServerTransferType {} // DELETE /api/transfers/:server

export interface CreateServerTransferType {} // POST /api/servers/:server/transfer (This requires a JWT from Authorization.)

export interface DeleteOutgoingServerTransferType {} // DELETE /api/servers/:server/transfer
