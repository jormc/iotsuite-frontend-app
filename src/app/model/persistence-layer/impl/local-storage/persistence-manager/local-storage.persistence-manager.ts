import { PersistenceManager } from '../../../persistence.manager';
import { IWidgetDAO } from '../../../api/i.widget.dao';
import { WidgetDAOLocalStorage } from '../daos/widget.dao.local-storage';

export class LocalStoragePersistenceManager implements PersistenceManager {

    private widgetDAO: IWidgetDAO;

    getWidgetDao(): IWidgetDAO {
        if (!this.widgetDAO || this.widgetDAO === undefined) {
            this.widgetDAO = new WidgetDAOLocalStorage();
        }
        return this.widgetDAO;
    }

}
