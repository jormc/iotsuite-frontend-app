import { IWidgetService } from './api/i.widget.service';
import { IWidgetTypeService } from './api/i.widget-type.service';
import { WidgetService } from './impl/widget.service';
import { WidgetTypeService } from './impl/widget-type.service';
// tslint:disable-next-line:max-line-length
import { LocalStoragePersistenceManager } from '../persistence-layer/impl/local-storage/persistence-manager/local-storage.persistence-manager';
import { SessionStoragePersistenceManager } from '../persistence-layer/impl/session-storage/manager/session-storage.persistence-manager';
import { RestPersistenceManager } from '../persistence-layer/impl/rest/persistence-manager/rest.persistence-manager';

export class ServiceManager {

    // Services
    private widgetService: IWidgetService;
    private widgetTypeService: IWidgetTypeService;

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

    getWidgetTYpeService(): IWidgetTypeService {
        if (!this.widgetTypeService || this.widgetTypeService === undefined) {
            this.widgetTypeService = new WidgetTypeService(
                this.localStoragePersistenceManager,
                this.sessionStoragePersistencemanager,
                this.restPersistenceManager
            );
        }
        return this.widgetTypeService;
    }
}
