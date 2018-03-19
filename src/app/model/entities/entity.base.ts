import { ModelUtils } from '../utils/model.utils';

export class EntityBase {
    protected id: string;
    protected createdAt: Date;
    protected updatedAt: Date;

    constructor() {
        this.id = ModelUtils.generateUUID();
        this.createdAt = new Date();
    }

}
