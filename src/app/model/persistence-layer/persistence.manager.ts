import { IWidgetDAO } from './api/i.widget.dao';
import { IWidgetTypeDAO } from './api/i.widget-type.dao';

export interface PersistenceManager {

    getWidgetDao(): IWidgetDAO;

    getWidgetTypeDao(): IWidgetTypeDAO;

}
