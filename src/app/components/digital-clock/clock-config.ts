
export class ClockConfig {

    dateFormat: string;
    clockFormat: string;
    showPmAm: boolean;
    backgroundColor: string;

    constructor() {
        this.dateFormat = 'dd/MM/yyyy';
        this.clockFormat = 'HH:mm:ss';
        this.showPmAm = false;
    }

}
