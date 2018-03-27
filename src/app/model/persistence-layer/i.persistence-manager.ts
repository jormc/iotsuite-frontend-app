import { ILogbookEntryDAO } from './api/i.logbook-entry.dao';

export interface PersistenceManager {

    getLogbookEntryDAO(): ILogbookEntryDAO;

}
