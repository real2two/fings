export interface DownloadBackupType {
    jwt: {
        server_uuid: string;
        backup_uuid: string;
        unique_id: string;
    };
}
export interface DownloadFileType {
    jwt: {
        file_path: string;
        server_uuid: string;
        unique_id: string;
    };
}
export interface UploadFileType {
    headers: {
        "content-type": "multipart/form-data" | `multipart/form-data;${string}`;
    };
    jwt: {
        server_uuid: string;
        user_uuid: string;
        unique_id: string;
    };
}
export interface RevokeServerJTIsType {
    body: {
        jtis: string[];
    };
}
export interface UpdateConfigurationType {
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
            };
            upload_limit: number;
        };
        system: {
            data: string;
            sftp: {
                bind_port: number;
            };
        };
        allowed_mounts: string[];
        remote: string;
    };
}
export interface GetSystemInformationType {
    query: {
        v?: string;
    };
}
export interface GetServerLogsType {
    query: {
        size?: string;
    };
}
export interface ChangeServerPowerStateType {
    body: {
        action: "start" | "stop" | "kill" | "restart";
        wait_seconds: number;
    };
}
export interface SendServerCommandType {
    body: {
        commands: string[];
    };
}
export interface PerformServerInstallType {
}
export interface PerformServerReinstallType {
}
export interface TriggerServerSyncType {
}
export interface CreateServerBackupType {
    body: {
        adapter: "wings" | "s3";
        uuid: string;
        ignore: string;
    };
}
export interface RestoreServerBackupType {
    download_url: any;
    adapter: string;
    body: {
        adapter: "wings" | "s3";
        truncate_directory: boolean;
        download_url?: string;
    };
}
export interface DeleteServerBackupType {
}
export interface GetServerFileContentType {
    query: {
        download?: string;
        file: string;
    };
}
export interface GetServerFileDirectoryType {
    query: {
        directory: string;
    };
}
export interface RenameServerFilesType {
    body: {
        root: string;
        files: {
            from: string;
            to: string;
        }[];
    };
}
export interface CopyServerFileType {
    body: {
        location: string;
    };
}
export interface WriteServerFileContentType {
    headers: {
        "content-type": "text/plain" | `text/plain;${string}`;
    };
    query: {
        file: string;
    };
}
export interface CreateServerFileDirectoryType {
    body: {
        name: string;
        path: string;
    };
}
export interface DeleteServerFileType {
    body: {
        files: string[];
        root: string;
    };
}
export interface CompressServerFilesType {
    body: {
        files: string[];
        root: string;
    };
}
export interface DecompressServerFileType {
    body: {
        file: string;
        root: string;
    };
}
export interface ChmodServerFilesType {
    body: {
        root: string;
        files: {
            file: string;
            mode: number;
        }[];
    };
}
export interface GetPullServerFileType {
}
export interface PullServerFileType {
    body: {
        url: string;
        directory?: string;
        file_name: string;
        foreground?: boolean;
        root: string;
        use_header: boolean;
    };
}
export interface DeletePullServerFileType {
}
export interface GetServersType {
}
export interface CreateServerType {
    body: {
        uuid: string;
        start_on_completion: boolean;
    };
}
export interface GetServerDetailsType {
}
export interface DeleteServerType {
}
export interface StartServerTransferType {
    jwt: {
        sub: string;
    };
    body: {
        url: string;
        token: string;
        server?: {
            uuid: string;
            start_on_completion: boolean;
        };
    };
}
export interface DeleteIncomingServerTransferType {
}
export interface CreateServerTransferType {
}
export interface DeleteOutgoingServerTransferType {
}
