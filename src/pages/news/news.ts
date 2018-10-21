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
  constructor(private api:ApisProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // this.notices = this.api.getNoticeList().snapshotChanges()
    //   .map(
    //     changes => {
    //       return changes.map(c => ({
    //         key: c.payload['key'], ...c.payload.val()
    //       }))
    //     });
    // console.log('ionViewDidLoad NewsPage');
  }

  see_new(){
    this.navCtrl.push(this.rootPage);
  }

}
