import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticePage } from '../notice/notice';
import { ApisProvider } from '../../providers/apis/apis';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})


export class NewsPage {
  notices: Observable<any[]>;
  rootPage = NoticePage;
  constructor( private api:ApisProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.api.getNoticeList().valueChanges();//.subscribe((datas) => { console.log("datas", datas) }, (err) => { console.log("probleme : ", err) });
 
  }

  see_new(){
    this.navCtrl.push(this.rootPage);
  }

}
