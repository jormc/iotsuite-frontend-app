
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceManager } from '../model/service-layer/service-manager';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppModelService {

    public serviceManager: ServiceManager;
    public data;

    constructor(private http: Http) {
        this.serviceManager = new ServiceManager();
        this.data = new Object();
    }

    getServiceManager(): ServiceManager {
        return this.serviceManager;
    }

}
