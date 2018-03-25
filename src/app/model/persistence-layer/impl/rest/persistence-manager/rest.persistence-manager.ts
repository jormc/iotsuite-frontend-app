import { PersistenceManager } from '../../../persistence.manager';
import { IWidgetDAO } from '../../../api/i.widget.dao';
import { WidgetDAORest } from '../daos/widget.dao.rest';
import { WidgetTypeDAORest } from '../daos/widget-type.dao.rest';
import { IWidgetTypeDAO } from '../../../api/i.widget-type.dao';

export class RestPersistenceManager implements PersistenceManager {

    private widgetDAO: IWidgetDAO;
    private widgetTypeDAO: IWidgetTypeDAO;

    getWidgetDao(): IWidgetDAO {
        if (!this.widgetDAO || this.widgetDAO === undefined) {
            this.widgetDAO = new WidgetDAORest();
        }
        return this.widgetDAO;
    }

    getWidgetTypeDao(): IWidgetTypeDAO {
        if (!this.widgetTypeDAO || this.widgetTypeDAO === undefined) {
            this.widgetTypeDAO = new WidgetTypeDAORest();
        }
        return this.widgetTypeDAO;
    }

}
