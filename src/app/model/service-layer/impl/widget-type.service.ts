import { IWidgetTypeService } from '../api/i.widget-type.service';
import { WidgetType } from '../../business-layer/entities/widget-type';
import { PersistenceTechnology } from '../../utils/model.utils';
import { IWidgetTypeDAO } from '../../persistence-layer/api/i.widget-type.dao';
// tslint:disable-next-line:max-line-length
import { LocalStoragePersistenceManager } from '../../persistence-layer/impl/local-storage/persistence-manager/local-storage.persistence-manager';
import { SessionStoragePersistenceManager } from '../../persistence-layer/impl/session-storage/manager/session-storage.persistence-manager';
import { RestPersistenceManager } from '../../persistence-layer/impl/rest/persistence-manager/rest.persistence-manager';


export class WidgetTypeService implements IWidgetTypeService {

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

    findAll(persistenceTechnology: PersistenceTechnology, persistenceDependency: any): Promise<WidgetType[]> {
        return this.getDAO(persistenceTechnology).findAll(persistenceDependency);
    }

    findById(id: string, persistenceTechnology: PersistenceTechnology, persistenceDependency: any): Promise<WidgetType> {
        throw new Error('Method not implemented.');
    }

    save(type: WidgetType, persistenceTechnology: PersistenceTechnology, persistenceDependency: any) {
        this.getDAO(persistenceTechnology).save(type, persistenceDependency);
    }

    delete(id: string, persistenceTechnology: PersistenceTechnology, persistenceDependency: any): Promise<WidgetType[]> {
        return this.getDAO(persistenceTechnology).delete(id, persistenceDependency);
    }

    getDAO(persistenceTechnology: PersistenceTechnology) {
        switch (persistenceTechnology) {
            case PersistenceTechnology.LOCAL_STORAGE:
                return this.localStoragePersistenceManager.getWidgetTypeDao();
            case PersistenceTechnology.SESSION_STORAGE:
                return this.sessionStoragePersistenceManager.getWidgetTypeDao();
            case PersistenceTechnology.REST:
                return this.restPersistenceManager.getWidgetTypeDao();
        }
    }
}
