import { PersistenceTechnology } from '../../utils/model.utils';
import { WidgetType } from '../../business-layer/entities/widget-type';

export interface IWidgetTypeService {

    findAll(persistenceTechnology: PersistenceTechnology, persistenceDependency: any): Promise<Array<WidgetType>>;

    findById(id: string, persistenceTechnology: PersistenceTechnology, persistenceDependency: any): Promise<WidgetType>;

    save(type: WidgetType, persistenceTechnology: PersistenceTechnology, persistenceDependency: any);

    delete(id: string, persistenceTechnology: PersistenceTechnology, persistenceDependency: any): Promise<Array<WidgetType>>;

}
