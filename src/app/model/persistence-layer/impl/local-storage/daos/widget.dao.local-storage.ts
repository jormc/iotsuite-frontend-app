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
            const mapObject: Map<string, Widget> = JSON.parse(persistenceDependency.getItem(EntitiesPersistenceIdentifiers.WIDGETS));
            const widgetList = new Array<Widget>();
            if (mapObject && mapObject !== undefined) {
                for (const w of Object.keys(mapObject)) {
                    widgetList.push(mapObject[w]);
                }
            }
            resolve(widgetList);
        });
    }

    findById(id: string, persistenceDependency: any): Promise<Widget> {
        throw new Error('Method not implemented.');
    }

    findByType(type: WidgetType, persistenceDependency: any): Promise<Widget[]> {
        throw new Error('Method not implemented.');
    }

    save(widget: Widget, persistenceDependency: any) {
        const dataObject = JSON.parse(persistenceDependency.getItem(EntitiesPersistenceIdentifiers.WIDGETS));
        const mapObject = dataObject ? dataObject : new Map<string, Widget>();
        mapObject[widget.id] = widget;
        persistenceDependency.setItem(EntitiesPersistenceIdentifiers.WIDGETS, JSON.stringify(mapObject));
    }

    delete(id: string, persistenceDependency: any): Promise<Widget[]> {
        return new Promise<Array<Widget>>((resolve, reject) => {
            const mapObject: Map<string, Widget> = JSON.parse(persistenceDependency.getItem(EntitiesPersistenceIdentifiers.WIDGETS));
            delete mapObject[id];
            persistenceDependency.setItem(EntitiesPersistenceIdentifiers.WIDGETS, JSON.stringify(mapObject));
            const widgetList = new Array<Widget>();
            for (const w of Object.keys(mapObject)) {
                widgetList.push(mapObject[w]);
            }
            resolve(widgetList);
        });
    }

}
