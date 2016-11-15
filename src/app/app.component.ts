import { Component, ViewChild } from '@angular/core';
import '../../public/css/styles.css';

import { MapBoxComponent} from './mapbox/mapbox.component'
import { SocketComponent} from './socket/socket.component'
import { SmoochComponent} from './smooch/smooch.component'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

    @ViewChild('themap') theMap : MapBoxComponent
    @ViewChild('thesocket') theSocket : SocketComponent
    @ViewChild('thesmooch') theSmooch : SmoochComponent

    onSmoochEvent (message : any) : void {
        console.log("SMOOCH ");
        console.log(message);

        if (message.msg == "userId") {
            console.log("tell socket to connect ");
            console.log(this.theSocket);
            this.theSocket.connectToSocket(message.data);
        }
    }

    onSocketEvent (message: any) : void {
        console.log("SOCKET ");
        console.log(message);
    }
}
