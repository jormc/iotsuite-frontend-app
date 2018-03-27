import { ModelUtils } from '../../utils/model-utils';

export class EntityBase {

    public id: string;
    public createdAt: Date;
    public createdBy: string;
    public updatedAt: Date;
    public updatedBy: string;

    constructor() {
        this.id = ModelUtils.generateUUID();
        this.createdAt = new Date();
        this.createdBy = 'aadmin';
        this.updatedAt = null;
        this.updatedBy = null;
    }

}
