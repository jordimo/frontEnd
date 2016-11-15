import { Output, EventEmitter, AfterViewInit, ViewChild, ElementRef, Component } from '@angular/core';

var socket = require('socket.io-client')('http://jordimo.com/');

@Component({
  selector: 'socket-component',
  templateUrl: './socket.component.html',
  styleUrls: [ './socket.component.css']
})


export class SocketComponent  {


    @Output() socketEvent = new EventEmitter();

    constructor() {

        socket.on('webaction', function (data : any){

            console.log("web_action = "  + data.action);
            console.log("web_data  = " + data.data);

        })


    }

    connectToSocket ( _userId: string) : void {

        console.log("connecting to socket using id : " + _userId);

        socket.emit('set user id', {userId : _userId});
    }

}
