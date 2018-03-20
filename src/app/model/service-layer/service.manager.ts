import { IWidgetService } from './api/i.widget.service';
import { WidgetService } from './impl/widget.service';
// tslint:disable-next-line:max-line-length
import { LocalStoragePersistenceManager } from '../persistence-layer/impl/local-storage/persistence-manager/local-storage.persistence-manager';
import { SessionStoragePersistenceManager } from '../persistence-layer/impl/session-storage/manager/session-storage.persistence-manager';
import { RestPersistenceManager } from '../persistence-layer/impl/rest/persistence-manager/rest.persistence-manager';


export class ServiceManager {

    // Services
    private widgetService: IWidgetService;

    // Persistence manager
    private localStoragePersistenceManager: LocalStoragePersistenceManager;
    private sessionStoragePersistencemanager: SessionStoragePersistenceManager;
    private restPersistenceManager: RestPersistenceManager;

    constructor() {
        this.localStoragePersistenceManager = new LocalStoragePersistenceManager();
        this.sessionStoragePersistencemanager = new SessionStoragePersistenceManager();
        this.restPersistenceManager = new RestPersistenceManager();
    }

    getWidgetService(): IWidgetService {
        if (!this.widgetService || this.widgetService === undefined) {
            this.widgetService = new WidgetService(
                this.localStoragePersistenceManager,
                this.sessionStoragePersistencemanager,
                this.restPersistenceManager
            );
        }
        return this.widgetService;
    }
}
