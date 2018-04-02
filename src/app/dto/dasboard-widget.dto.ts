import { DashboardWidgetComponent } from '../modules/dashboard/dashboard-widget/dashboard-widget.component';

export enum WidgetSize {
    SINGLE = 1,
    DOUBLE = 2
}

export enum WidgetStatus {
    ENABLED = 'enabled',
    DISABLED = 'disabled',
    UNKNOWN = 'unknown'
}

export enum WidgetType {
    SENSOR = 'sensor',
    ACTUATOR = 'actuator',
    META = 'meta'
}

export interface DashboardWidget {

    name: string;
    size: WidgetSize;
    status: WidgetStatus;
    type: WidgetType;
    value: string;
    unit: string;
    color: string;

}
