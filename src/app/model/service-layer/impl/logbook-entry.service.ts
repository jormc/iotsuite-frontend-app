import { ILogbookEntryService } from '../api/i.logbook-entry.service';
import { LogbookEntry } from '../../business-layer/entities/logbook-entry';
import { PersistenceTechnology } from '../../utils/model-utils';
// tslint:disable-next-line:max-line-length
import { LocalStoragePersistenceManager } from '../../persistence-layer/impl/local-storage/persistence-manager/local-storage.persistence-manager';
// tslint:disable-next-line:max-line-length
import { SessionStoragePersistenceManager } from '../../persistence-layer/impl/session-storage/persistence-manager/session-storage.persistence-manager';
import { RestPersistenceManager } from '../../persistence-layer/impl/rest/persistence-manager/rest.persistence-manager';
import { ILogbookEntryDAO } from '../../persistence-layer/api/i.logbook-entry.dao';


export class LogbookEntryService implements ILogbookEntryService {

    private localStoragePersistenceManager: LocalStoragePersistenceManager;
    private sessionStoragePersistencemanager: SessionStoragePersistenceManager;
    private restPersistenceManager: RestPersistenceManager;

    constructor(
        localStoragePersistenceManager: LocalStoragePersistenceManager,
        sessionStoragePersistencemanager: SessionStoragePersistenceManager,
        restPersistenceManager: RestPersistenceManager) {
        this.localStoragePersistenceManager = localStoragePersistenceManager;
        this.sessionStoragePersistencemanager = sessionStoragePersistencemanager;
        this.restPersistenceManager = restPersistenceManager;
    }

    findAll(persistenceTechnology: PersistenceTechnology, persistenceDependency: any): Promise<LogbookEntry[]> {
        return this.getDao(persistenceTechnology).findAll(persistenceDependency);
    }

    save(logbookEntry: LogbookEntry, persistenceTechnology: PersistenceTechnology, persistenceDependency: any) {
        this.getDao(persistenceTechnology).save(logbookEntry, persistenceDependency);
    }

    delete(id: string, persistenceTechnology: PersistenceTechnology, persistenceDependency: any) {
        this.getDao(persistenceTechnology).delete(id, persistenceDependency);
    }

    private getDao(persistenceTechnology: PersistenceTechnology): ILogbookEntryDAO {
        let dao: ILogbookEntryDAO;
        switch (persistenceTechnology) {
            case PersistenceTechnology.LOCAL_STORAGE:
                dao = this.localStoragePersistenceManager.getLogbookEntryDAO();
                break;

            case PersistenceTechnology.SESSION_STORAGE:
                dao = this.sessionStoragePersistencemanager.getLogbookEntryDAO();
                break;

            case PersistenceTechnology.REST:
                dao = this.restPersistenceManager.getLogbookEntryDAO();
                break;
        }
        return dao;
    }
}
