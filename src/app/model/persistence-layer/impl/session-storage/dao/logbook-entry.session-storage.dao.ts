import { ILogbookEntryDAO } from '../../../api/i.logbook-entry.dao';
import { LogbookEntry } from '../../../../business-layer/entities/logbook-entry';

export class LogbookEntrySessionStorageDAO implements ILogbookEntryDAO {

    findAll(persistenceDependency: any): Promise<LogbookEntry[]> {
        throw new Error('Method not implemented.');
    }

    save(logbookEntry: LogbookEntry, persistenceDependency: any) {
        throw new Error('Method not implemented.');
    }

    delete(id: string, persistenceDependency: any) {
        throw new Error('Method not implemented.');
    }

}
