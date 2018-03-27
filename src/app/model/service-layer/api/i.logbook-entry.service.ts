import { LogbookEntry } from '../../business-layer/entities/logbook-entry';
import { PersistenceTechnology } from '../../utils/model-utils';

export interface ILogbookEntryService {

    findAll(persistenceTechnology: PersistenceTechnology, persistenceDependency: any): Promise<Array<LogbookEntry>>;

    save(logbookEntry: LogbookEntry, persistenceTechnology: PersistenceTechnology, persistenceDependency: any);

    delete(id: string, persistenceTechnology: PersistenceTechnology, persistenceDependency: any);

}
