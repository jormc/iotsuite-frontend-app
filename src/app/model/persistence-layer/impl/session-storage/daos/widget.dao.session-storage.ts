import { IWidgetDAO } from '../../../api/i.widget.dao';
import { Widget } from '../../../../entities/widget';
import { WidgetType } from '../../../../entities/widget-type';
import { ModelUtils, EntitiesPersistenceIdentifiers } from '../../../../utils/model.utils';

export class WidgetDAOSessionStorage implements IWidgetDAO {
    findAll(persistenceDependency: any): Promise<Widget[]> {
        throw new Error('Method not implemented.');
    }
    findById(id: string, persistenceDependency: any): Promise<Widget> {
        throw new Error('Method not implemented.');
    }
    findByType(type: WidgetType, persistenceDependency: any): Promise<Widget[]> {
        throw new Error('Method not implemented.');
    }
    save(widget: Widget, persistenceDependency: any) {
        throw new Error('Method not implemented.');
    }
    delete(widget: Widget, persistenceDependency: any) {
        throw new Error('Method not implemented.');
    }
}

