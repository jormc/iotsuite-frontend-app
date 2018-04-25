export enum DashboardWidgetType {
    INPUT = 'INPUT',
    OUTPUT = 'OUTPUT',
    INOUTPUT = 'INOUTPUT'
}

export enum DashboardWidgetDataType {
    TEXT = 'TEXT',
    NUMBER = 'NUMBER',
    BOOLEAN = 'BOOLEAN'
}

export class DashboardWidget {

    id: string;
    name: string;
    serverId: number;
    topic: string;
    type: DashboardWidgetType;
    dataType: DashboardWidgetDataType;
    lastUpdate: number;

    constructor(name: string, topic: string, type: DashboardWidgetType, dataType: DashboardWidgetDataType, serverId: number) {
        this.name = name;
        this.topic = topic;
        this.type = type;
        this.dataType = dataType;
        this.serverId = serverId;
        this.lastUpdate = Date.now();
    }

}
