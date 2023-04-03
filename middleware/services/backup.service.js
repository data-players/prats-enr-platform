const path = require('path');
const BackupService = require('@semapps/backup');
const fs = require('fs');
let Client = require('ssh2-sftp-client');
require('dotenv-flow').config();
const CONFIG = require('../config')

console.log('fuseki-backup path',path.resolve(__dirname, '../fuseki-backups'));

module.exports = {
  mixins: [BackupService],
  settings: {
    localServer: {
      fusekiBackupsPath: path.resolve(__dirname, '../fuseki-backups'),
      otherDirsPaths: {
        uploads: path.resolve(__dirname, '../uploads')
      }
    },
    cronJob: {
      time: '0 4 * * *',
      timeZone: 'Europe/Paris'
    }
  },
  actions: {
    syncWithRemoteServer(ctx) {
      return new Promise(async (resolve, reject) => {
        try {
          let sftp = new Client();

          await sftp.connect({
            user: CONFIG.BACKUP_SERVER_USER,
            password: CONFIG.BACKUP_SERVER_PASSWORD,
            host: CONFIG.BACKUP_SERVER_HOST,
            path: CONFIG.BACKUP_SERVER_PATH,
            port: CONFIG.BACKUP_SERVER_PORT,
          });

          fs.readdir("/app/fuseki-backups", async function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
                reject('Unable to scan directory: ' + err.message)
            }
            const now = Date.now();
            files = files.map(function (fileName) {
              return {
                name: fileName,
                diff: (now - fs.statSync("/app/fuseki-backups" + '/' + fileName).mtime) / 1000
              };
            }).filter(f=>f.diff<60)

            for (var file of files) {
              await sftp.put("/app/fuseki-backups" + '/' +file, "/backups/prats/backup/" +file);
            }

            resolve()
          });
        } catch (e) {
          reject (e)
        }
      });
    }
  }
};

// call backup.syncWithRemoteServer