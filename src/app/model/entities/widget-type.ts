import { EntityBase } from './entity.base';

export class WidgetType extends EntityBase {

    public name: string;
    public description: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    setDescription(description: string) {
        this.description = description;
    }
}
