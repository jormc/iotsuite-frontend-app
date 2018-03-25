import { PersistenceManager } from '../../../persistence.manager';
import { IWidgetDAO } from '../../../api/i.widget.dao';
import { IWidgetTypeDAO } from '../../../api/i.widget-type.dao';
import { WidgetDAOSessionStorage } from '../daos/widget.dao.session-storage';

export class SessionStoragePersistenceManager implements PersistenceManager {

    private widgetDAO: IWidgetDAO;
    private widgetTypeDAO: IWidgetTypeDAO;

    getWidgetDao(): IWidgetDAO {
        if (!this.widgetDAO || this.widgetDAO === undefined) {
            this.widgetDAO = new WidgetDAOSessionStorage();
        }
        return this.widgetDAO;
    }

    getWidgetTypeDao(): IWidgetTypeDAO {
        if (!this.widgetTypeDAO || this.widgetDAO === undefined) {
            this.widgetDAO = new WidgetDAOSessionStorage();
        }
        return this.widgetTypeDAO;
    }
}
