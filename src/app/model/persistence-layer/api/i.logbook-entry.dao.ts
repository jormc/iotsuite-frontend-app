import { LogbookEntry } from '../../business-layer/entities/logbook-entry';

export interface ILogbookEntryDAO {

    findAll(persistenceDependency: any): Promise<Array<LogbookEntry>>;

    save(logbookEntry: LogbookEntry, persistenceDependency: any);

    delete(id: string, persistenceDependency: any);

}
