import { AfterViewInit, ViewChild, ElementRef, Component } from '@angular/core';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
require('mapbox-gl/dist/mapbox-gl.css');

@Component({
  selector: 'mapbox-component',
  templateUrl: './mapbox.component.html',
  styleUrls: [ './mapbox.component.css']
})

export class MapBoxComponent implements AfterViewInit {

    @ViewChild('mapView', {read: ElementRef}) mapView : ElementRef;

    THE_MAP : Object

    constructor() {

        mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZGltbyIsImEiOiJjaXZjaGFmemYwMGZ6Mm9sYmx0YWZ5ZTNjIn0.hZOxqX-9DGuz43eSK9eRkA';
    }

    changeMap(_long : Number, _lat : Number, _pitch : Number, _roll : Number) {

    }



    ngAfterViewInit() {

        this.THE_MAP =  new mapboxgl.Map({
            container:  this.mapView.nativeElement,
            style:      'mapbox://styles/jordimo/civchdkqp005o2imogg0g529u'
        });
    }
}
