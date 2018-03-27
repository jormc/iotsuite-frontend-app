import { EntityBase } from './entity-base';

export class LogbookEntry extends EntityBase {

    public title: string;
    public description: string;
    public link: string;

    constructor(title: string, description: string, link: string) {
        super();
        this.title = title;
        this.description = description;
        this.link = link;
    }

}
