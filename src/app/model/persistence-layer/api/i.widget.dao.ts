import { Widget } from '../../entities/widget';
import { WidgetType } from '../../entities/widget-type';

export interface IWidgetDAO {

    findAll(persistenceDependency: any): Promise<Array<Widget>>;

    findById(id: string, persistenceDependency: any): Promise<Widget>;

    findByType(type: WidgetType, persistenceDependency: any): Promise<Array<Widget>>;

    save(widget: Widget, persistenceDependency: any);

    delete(widget: Widget, persistenceDependency: any);

}
