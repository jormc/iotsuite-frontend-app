import { EntityBase } from './entity.base';
import { WidgetType } from './widget-type';

export class Widget extends EntityBase {

    public name: string;
    public description: string;
    public type: WidgetType;
    public topic: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

}
