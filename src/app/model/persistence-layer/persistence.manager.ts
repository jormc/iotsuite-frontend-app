import { IWidgetDAO } from './api/i.widget.dao';

export interface PersistenceManager {

    getWidgetDao(): IWidgetDAO;

}
