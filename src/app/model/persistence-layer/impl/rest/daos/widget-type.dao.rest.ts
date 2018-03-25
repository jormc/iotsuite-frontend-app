import { IWidgetTypeDAO } from '../../../api/i.widget-type.dao';
import { WidgetType } from '../../../../business-layer/entities/widget-type';
import { ModelUtils, EntitiesPersistenceIdentifiers } from '../../../../utils/model.utils';

export class WidgetTypeDAORest implements IWidgetTypeDAO {

    findAll(persistenceDependency: any): Promise<WidgetType[]> {
        throw new Error('Method not implemented.');
    }

    findById(id: string, persistenceDependency: any): Promise<WidgetType> {
        throw new Error('Method not implemented.');
    }

    save(type: WidgetType, persistenceDependency: any) {
        throw new Error('Method not implemented.');
    }

    delete(id: string, persistenceDependency: any): Promise<WidgetType[]> {
        throw new Error('Method not implemented.');
    }
}
