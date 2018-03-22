import { PersistenceTechnology } from '../../utils/model.utils';
import { Widget } from '../../entities/widget';
import { WidgetType } from '../../entities/widget-type';


export interface IWidgetService {

    findAll(persistenceTechnology: PersistenceTechnology, persistenceDependency: any): Promise<Array<Widget>>;

    findById(id: string, persistenceTechnology: PersistenceTechnology, persistenceDependency: any): Promise<Widget>;

    findByType(type: WidgetType, persistenceTechnology: PersistenceTechnology, persistenceDependency: any): Promise<Array<Widget>>;

    save(widget: Widget, persistenceTechnology: PersistenceTechnology, persistenceDependency: any);

    delete(id: string, persistenceTechnology: PersistenceTechnology, persistenceDependency: any): Promise<Array<Widget>>;

}
