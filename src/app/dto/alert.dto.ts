export enum AlertType {
    SUCCESS = 'success',
    INFO = 'info',
    WARNING = 'warning',
    DANGER = 'danger',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    LIGHT = 'light',
    DARK = 'dark'
}

export class AlertDTO {

    public type: AlertType;
    public title: string;
    public message: string;
    public closeable: boolean;

    constructor(type: AlertType, title: string, message: string, closeable: boolean = true) {
        this.type = type;
        this.title = title;
        this.message = message;
        this.closeable = closeable;
    }

}