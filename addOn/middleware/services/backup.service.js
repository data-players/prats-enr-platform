const path = require('path');
const BackupService = require('@semapps/backup');
const CONFIG = require('../config/config');

module.exports = {
  mixins: [BackupService],
  settings: {
    localServer: {
      fusekiBackupsPath: CONFIG.BACKUP_FUSEKI_DATASETS_PATH,
    },
    copyMethod: 'ftp',
    remoteServer: {
      user: CONFIG.BACKUP_SERVER_USER,
      password: CONFIG.BACKUP_SERVER_PASSWORD,
      host: CONFIG.BACKUP_SERVER_HOST,
      path: CONFIG.BACKUP_SERVER_PATH,
      port: 22
    },
    cronJob: {
      time: '15 4 * * *', // Every night at 4am
      timeZone: 'Europe/Paris'
    }
  }
};
