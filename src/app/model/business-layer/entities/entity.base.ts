import { ModelUtils } from '../../utils/model.utils';

export class EntityBase {

    public id: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor() {
        this.id = ModelUtils.generateUUID();
        this.createdAt = new Date();
    }

}
