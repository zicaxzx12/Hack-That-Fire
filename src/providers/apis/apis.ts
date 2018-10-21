import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';

declare var google: any;
/*
  Generated class for the ApisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApisProvider {
  apiurl = "http://api.openweathermap.org/data/2.5/weather?APPID=91133df127c96d761d618924474da2ac&q=";
  // private noteListRef = this.db.list<any>('notices');

// private db: AngularFireDatabase,
  constructor( public http: HttpClient) {
    console.log('Hello ApisProvider Provider');
  }

  get_wheater(data){
    return this.http.get(this.apiurl+data);
  }

  create_map(id){
    var mapOptions = {
      center: { lat: 25.7667, lng: -108.9667 },
      zoom: 8
    };
    var map2 = new google.maps.Map(document.getElementById(id), mapOptions);
  }

  // getNoticeList() {
  //   return this.noteListRef;
  // }

  // addNotice(data) {
  //   return this.noteListRef.push(data);
  // }

  // updateNotice(data) {
  //   return this.noteListRef.update(data.key, data);
  // }

  // removeNotice(data) {
  //   return this.noteListRef.remove(data.key);
  // }

  }


