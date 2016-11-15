import { Output, EventEmitter, AfterViewInit, ViewChild, ElementRef, Component } from '@angular/core';

var Smooch = require('smooch');

@Component({
  selector: 'smooch-component',
  templateUrl: './smooch.component.html',
  styleUrls: [ './smooch.component.css']
})


export class SmoochComponent implements AfterViewInit {

    @ViewChild('smoochView', {read: ElementRef}) smoochView : ElementRef;

    @Output() smoochEvent = new EventEmitter();

    constructor() {

        Smooch.init({
			appToken: '9iioaw8iccbvm3rzrjd55bit1',
			embedded: true,
			headerText: "So, what's up?",
        	inputPlaceholder: "Type a message...",
        	emailCaptureEnabled: true
		});

        let that = this;

        Smooch.on('ready', function() {
            that.smoochEvent.emit({
                msg : "userId",
                data : Smooch.getUserId()
            })
        });

    }


    ngAfterViewInit () {

        Smooch.render(this.smoochView.nativeElement);

    }
}
