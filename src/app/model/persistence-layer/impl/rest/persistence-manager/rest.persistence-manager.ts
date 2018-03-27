import { PersistenceManager } from '../../../i.persistence-manager';
import { ILogbookEntryDAO } from '../../../api/i.logbook-entry.dao';
import { LogbookEntryRestDAO } from '../dao/logbook-entry.rest.dao';

export class RestPersistenceManager implements PersistenceManager {

    private logbookEntryDAO: ILogbookEntryDAO;

    getLogbookEntryDAO(): ILogbookEntryDAO {
        if (!this.logbookEntryDAO || this.logbookEntryDAO === undefined) {
            this.logbookEntryDAO = new LogbookEntryRestDAO();
        }
        return this.logbookEntryDAO;
    }

}
