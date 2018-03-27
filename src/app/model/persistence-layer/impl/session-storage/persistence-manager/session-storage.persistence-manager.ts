import { PersistenceManager } from '../../../i.persistence-manager';
import { ILogbookEntryDAO } from '../../../api/i.logbook-entry.dao';
import { LogbookEntrySessionStorageDAO } from '../dao/logbook-entry.session-storage.dao';

export class SessionStoragePersistenceManager implements PersistenceManager {

    private logbookEntryDAO: ILogbookEntryDAO;

    getLogbookEntryDAO(): ILogbookEntryDAO {
        if (!this.logbookEntryDAO || this.logbookEntryDAO === undefined) {
            this.logbookEntryDAO = new LogbookEntrySessionStorageDAO();
        }
        return this.logbookEntryDAO;
    }

}
