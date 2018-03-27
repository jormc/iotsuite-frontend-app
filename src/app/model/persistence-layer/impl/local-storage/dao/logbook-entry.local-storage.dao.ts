import { ILogbookEntryDAO } from '../../../api/i.logbook-entry.dao';
import { LogbookEntry } from '../../../../business-layer/entities/logbook-entry';
import { EntitiesPersistenceIdentifiers } from '../../../../utils/model-utils';

export class LogbookEntryLocalStorageDAO implements ILogbookEntryDAO {

    findAll(persistenceDependency: any): Promise<LogbookEntry[]> {
        return new Promise<Array<LogbookEntry>>((resolve, reject) => {
            const mapObject: Map<string, LogbookEntry> =
                JSON.parse(persistenceDependency.getItem(EntitiesPersistenceIdentifiers.LOGBOOK_ENTRIES));
            const logbookEntriesList = new Array<LogbookEntry>();
            if (mapObject && mapObject !== undefined) {
                for (const w of Object.keys(mapObject)) {
                    logbookEntriesList.push(mapObject[w]);
                }
            }
            resolve(logbookEntriesList);
        });
    }

    save(logbookEntry: LogbookEntry, persistenceDependency: any) {
        console.log('Saving logbook entry');
        const dataObject =
            JSON.parse(persistenceDependency.getItem(EntitiesPersistenceIdentifiers.LOGBOOK_ENTRIES));
        const mapObject = dataObject ? dataObject : new Map<string, LogbookEntry>();
        mapObject[logbookEntry.id] = logbookEntry;
        persistenceDependency.setItem(
            EntitiesPersistenceIdentifiers.LOGBOOK_ENTRIES,
            JSON.stringify(mapObject)
        );
    }

    delete(id: string, persistenceDependency: any) {
        const mapObject: Map<string, LogbookEntry> =
            JSON.parse(persistenceDependency.getItem(EntitiesPersistenceIdentifiers.LOGBOOK_ENTRIES));
        delete mapObject[id];
        persistenceDependency.setItem(
            EntitiesPersistenceIdentifiers.LOGBOOK_ENTRIES,
            JSON.stringify(mapObject)
        );
    }

}
