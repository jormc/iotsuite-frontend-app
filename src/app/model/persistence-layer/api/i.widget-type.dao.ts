import { WidgetType } from '../../business-layer/entities/widget-type';

export interface IWidgetTypeDAO {

    findAll(persistenceDependency: any): Promise<Array<WidgetType>>;

    findById(id: string, persistenceDependency: any): Promise<WidgetType>;

    save(type: WidgetType, persistenceDependency: any);

    delete(id: string, persistenceDependency: any): Promise<Array<WidgetType>>;

}
