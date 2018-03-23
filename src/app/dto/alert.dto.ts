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

    public id: number;
    public type: AlertType;
    public title: string;
    public message: string;
    public closeable: boolean;

    constructor(id: number, type: AlertType, title: string, message: string, closeable: boolean) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.message = message;
        this.closeable = closeable;
    }

}
