import { IWidgetTypeDAO } from '../../../api/i.widget-type.dao';
import { WidgetType } from '../../../../business-layer/entities/widget-type';
import { ModelUtils, EntitiesPersistenceIdentifiers } from '../../../../utils/model.utils';

/**
 *  Widget Type LocalStorage DAO implementation
 *  Uses the HTML5 LocalStorage object to store the data
 */
export class WidgetTypeDAOLocalStorage implements IWidgetTypeDAO {

    findAll(persistenceDependency: any): Promise<Array<WidgetType>> {
        return new Promise<Array<WidgetType>>((resolve, reject) => {
            const mapObject: Map<string, WidgetType> = JSON.parse(persistenceDependency.getItem(EntitiesPersistenceIdentifiers.WIDGETS));
            const typesList = new Array<WidgetType>();
            if (mapObject && mapObject !== undefined) {
                for (const w of Object.keys(mapObject)) {
                    typesList.push(mapObject[w]);
                }
            }
            resolve(typesList);
        });
    }

    findById(id: string, persistenceDependency: any): Promise<WidgetType> {
        throw new Error('Method not implemented.');
    }

    save(widgetType: WidgetType, persistenceDependency: any) {
        const dataObject = JSON.parse(persistenceDependency.getItem(EntitiesPersistenceIdentifiers.WIDGET_TYPES));
        const mapObject = dataObject ? dataObject : new Map<string, WidgetType>();
        mapObject[widgetType.id] = widgetType;
        persistenceDependency.setItem(EntitiesPersistenceIdentifiers.WIDGET_TYPES, JSON.stringify(mapObject));
    }

    delete(id: string, persistenceDependency: any): Promise<WidgetType[]> {
        return new Promise<Array<WidgetType>>((resolve, reject) => {
            const mapObject: Map<string, WidgetType> =
                JSON.parse(persistenceDependency.getItem(EntitiesPersistenceIdentifiers.WIDGET_TYPES));
            delete mapObject[id];
            persistenceDependency.setItem(EntitiesPersistenceIdentifiers.WIDGET_TYPES, JSON.stringify(mapObject));
            const widgetTypesList = new Array<WidgetType>();
            for (const t of Object.keys(mapObject)) {
                widgetTypesList.push(mapObject[t]);
            }
            resolve(widgetTypesList);
        });
    }

}
