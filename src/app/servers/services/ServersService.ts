import { Injectable } from '@angular/core';

import { Server, ServerStatus } from '../model/server';

@Injectable()
export class ServerService {

    updateServerStatus(server: Server)  {
        server.status = ServerStatus.ONLINE;
    }

}
