import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() >0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    test(){
        return 1+1>0;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green': 'red';
    }
}