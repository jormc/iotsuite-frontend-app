import { AlertType } from '../enums/alert-type.enum';

export class AlertDTO {

    type: AlertType;
    title: string;
    message: string;
    dismissible: boolean;

    constructor(
        type: AlertType,
        title: string,
        message: string,
        dismissible: boolean) {
            this.type = type;
            this.title = title;
            this.message = message;
            this.dismissible = dismissible;
    }

}
