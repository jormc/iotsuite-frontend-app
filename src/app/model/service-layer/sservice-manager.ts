import { ILogbookEntryService } from './api/i.logbook-entry.service';
// tslint:disable-next-line:max-line-length
import { LocalStoragePersistenceManager } from '../persistence-layer/impl/local-storage/persistence-manager/local-storage.persistence-manager';
// tslint:disable-next-line:max-line-length
import { SessionStoragePersistenceManager } from '../persistence-layer/impl/session-storage/persistence-manager/session-storage.persistence-manager';
import { RestPersistenceManager } from '../persistence-layer/impl/rest/persistence-manager/rest.persistence-manager';
import { LogbookEntryService } from './impl/logbook-entry.service';


export class ServiceManager {

    // Services
    logbookEntryService: ILogbookEntryService;

    // Persistence manager
    private localStoragePersistenceManager: LocalStoragePersistenceManager;
    private sessionStoragePersistencemanager: SessionStoragePersistenceManager;
    private restPersistenceManager: RestPersistenceManager;

    constructor() {
        this.localStoragePersistenceManager = new LocalStoragePersistenceManager();
        this.sessionStoragePersistencemanager = new SessionStoragePersistenceManager();
        this.restPersistenceManager = new RestPersistenceManager();
    }

    getLogbookEntryService(): ILogbookEntryService {
        if (!this.logbookEntryService || this.logbookEntryService === undefined) {
            this.logbookEntryService = new LogbookEntryService(
                this.localStoragePersistenceManager,
                this.sessionStoragePersistencemanager,
                this.restPersistenceManager
            );
        }
        return this.logbookEntryService;
    }

}