import { PersistenceManager } from '../../../i.persistence-manager';
import { ILogbookEntryDAO } from '../../../api/i.logbook-entry.dao';
import { LogbookEntryLocalStorageDAO } from '../dao/logbook-entry.local-storage.dao';

export class LocalStoragePersistenceManager implements PersistenceManager {

    private logbookEntryDAO: ILogbookEntryDAO;

    getLogbookEntryDAO(): ILogbookEntryDAO {
        if (!this.logbookEntryDAO || this.logbookEntryDAO === undefined) {
            this.logbookEntryDAO = new LogbookEntryLocalStorageDAO();
        }
        return this.logbookEntryDAO;
    }

}
