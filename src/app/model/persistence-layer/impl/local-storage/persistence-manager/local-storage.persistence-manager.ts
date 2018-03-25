import { PersistenceManager } from '../../../persistence.manager';
import { IWidgetDAO } from '../../../api/i.widget.dao';
import { IWidgetTypeDAO } from '../../../api/i.widget-type.dao';

import { WidgetDAOLocalStorage } from '../daos/widget.dao.local-storage';
import { WidgetTypeDAOLocalStorage } from '../daos/widget-type.dao.local-storage';

export class LocalStoragePersistenceManager implements PersistenceManager {

    private widgetDAO: IWidgetDAO;
    private widgetTypeDAO: IWidgetTypeDAO;

    getWidgetDao(): IWidgetDAO {
        if (!this.widgetDAO || this.widgetDAO === undefined) {
            this.widgetDAO = new WidgetDAOLocalStorage();
        }
        return this.widgetDAO;
    }

    getWidgetTypeDao(): IWidgetTypeDAO {
        if (!this.widgetTypeDAO || this.widgetTypeDAO === undefined) {
            this.widgetTypeDAO = new WidgetTypeDAOLocalStorage();
        }
        return this.widgetTypeDAO;
    }

}
