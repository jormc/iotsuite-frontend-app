import { PersistenceManager } from '../../../persistence.manager';
import { IWidgetDAO } from '../../../api/i.widget.dao';
import { WidgetDAOSessionStorage } from '../daos/widget.dao.session-storage';

export class SessionStoragePersistenceManager implements PersistenceManager {

    private widgetDAO: IWidgetDAO;

    getWidgetDao(): IWidgetDAO {
        if (!this.widgetDAO || this.widgetDAO === undefined) {
            this.widgetDAO = new WidgetDAOSessionStorage();
        }
        return this.widgetDAO;
    }

}
