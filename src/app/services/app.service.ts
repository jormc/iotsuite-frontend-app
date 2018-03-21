
import { Injectable } from '@angular/core';
import { ServiceManager } from '../model/service-layer/service.manager';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

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
