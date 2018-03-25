import { EntityBase } from './entity.base';

export class MqttServer extends EntityBase {

    public name: string;
    public host: string;
    public port: number;
    public user: string;
    public pass: string;
    public qos: number;

    constructor() {
        super();
    }

}
