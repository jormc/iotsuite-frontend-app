import { IWidgetDAO } from '../../../api/i.widget.dao';
import { Widget } from '../../../../entities/widget';
import { WidgetType } from '../../../../entities/widget-type';
import { ModelUtils, EntitiesPersistenceIdentifiers } from '../../../../utils/model.utils';

/**
 *  Widget LocalStorage DAO implementation
 *  Uses the HTML5 LocalStorage object to store the data
 */
export class WidgetDAOLocalStorage implements IWidgetDAO {

    findAll(persistenceDependency: any): Promise<Array<Widget>> {
        return new Promise<Array<Widget>>((resolve, reject) => {
            resolve(JSON.parse(persistenceDependency.getItem(EntitiesPersistenceIdentifiers.WIDGETS)));
        });
    }

    findById(id: string, persistenceDependency: any): Promise<Widget> {
        throw new Error('Method not implemented.');
    }

    findByType(type: WidgetType, persistenceDependency: any): Promise<Widget[]> {
        throw new Error('Method not implemented.');
    }

    save(widget: Widget, persistenceDependency: any) {
        const object = persistenceDependency.getItem(EntitiesPersistenceIdentifiers.WIDGETS) ;
        const widgetList = (!object || object === undefined) ? new Array<Widget>() : JSON.parse(object);
        widgetList.push(widget);
        persistenceDependency.setItem(EntitiesPersistenceIdentifiers.WIDGETS, JSON.stringify(widgetList));
    }

    delete(widget: Widget, persistenceDependency: any) {

        // Get all widgets, search for the id and delete it

        throw new Error('Method not implemented.');
    }

}

