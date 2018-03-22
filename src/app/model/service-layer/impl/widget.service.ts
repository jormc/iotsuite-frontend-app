import { IWidgetService } from '../api/i.widget.service';
import { Widget } from '../../entities/widget';
import { WidgetType } from '../../entities/widget-type';
import { PersistenceTechnology } from '../../utils/model.utils';
import { IWidgetDAO } from '../../persistence-layer/api/i.widget.dao';
// tslint:disable-next-line:max-line-length
import { LocalStoragePersistenceManager } from '../../persistence-layer/impl/local-storage/persistence-manager/local-storage.persistence-manager';
import { SessionStoragePersistenceManager } from '../../persistence-layer/impl/session-storage/manager/session-storage.persistence-manager';
import { RestPersistenceManager } from '../../persistence-layer/impl/rest/persistence-manager/rest.persistence-manager';


export class WidgetService implements IWidgetService {

    private localStoragePersistenceManager: LocalStoragePersistenceManager;
    private sessionStoragePersistenceManager: SessionStoragePersistenceManager;
    private restPersistenceManager: RestPersistenceManager;

    constructor(
        localStoragePersistenceManager: LocalStoragePersistenceManager,
        sessionStoragePersistenceManager: SessionStoragePersistenceManager,
        restPersistenceManager: RestPersistenceManager) {
            this.localStoragePersistenceManager = localStoragePersistenceManager;
            this.sessionStoragePersistenceManager = sessionStoragePersistenceManager;
            this.restPersistenceManager = restPersistenceManager;
    }

    findAll(persistenceTechnology: PersistenceTechnology, persistenceDependency: any): Promise<Widget[]> {
        return this.getDAO(persistenceTechnology).findAll(persistenceDependency);
    }

    findById(id: string, persistenceTechnology: PersistenceTechnology, persistenceDependency: any): Promise<Widget> {
        throw new Error('Method not implemented.');
    }

    findByType(type: WidgetType, persistenceTechnology: PersistenceTechnology, persistenceDependency: any): Promise<Widget[]> {
        throw new Error('Method not implemented.');
    }

    save(widget: Widget, persistenceTechnology: PersistenceTechnology, persistenceDependency: any) {
        this.getDAO(persistenceTechnology).save(widget, persistenceDependency);
    }

    delete(id: string, persistenceTechnology: PersistenceTechnology, persistenceDependency: any): Promise<Widget[]> {
        return this.getDAO(persistenceTechnology).delete(id, persistenceDependency);
    }

    getDAO(persistenceTechnology: PersistenceTechnology) {
        switch (persistenceTechnology) {
            case PersistenceTechnology.LOCAL_STORAGE:
                return this.localStoragePersistenceManager.getWidgetDao();
            case PersistenceTechnology.SESSION_STORAGE:
                return this.sessionStoragePersistenceManager.getWidgetDao();
            case PersistenceTechnology.REST:
                return this.restPersistenceManager.getWidgetDao();
        }
    }
}
