import { PersistenceManager } from '../../../persistence.manager';
import { IWidgetDAO } from '../../../api/i.widget.dao';
import { WidgetDAORest } from '../daos/widget.dao.rest';

export class RestPersistenceManager implements PersistenceManager {

    private widgetDAO: IWidgetDAO;

    getWidgetDao(): IWidgetDAO {
        if (!this.widgetDAO || this.widgetDAO === undefined) {
            this.widgetDAO = new WidgetDAORest();
        }
        return this.widgetDAO;
    }

}
