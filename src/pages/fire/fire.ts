import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { ToastController } from 'ionic-angular';
import { ApisProvider } from '../../providers/apis/apis';

/**
 * Generated class for the FirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fire',
  templateUrl: 'fire.html',
})
export class FirePage {

  image: string = null;
  public cordinates={lat:null, long:null};
  public FIRE:any={image:"", city:"", description:"", user:"", status:true};

  constructor(public api:ApisProvider, public toastCtrl: ToastController, private geolocation: Geolocation, private camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.cordinates.lat = resp.coords.latitude;
      this.cordinates.long = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getPicture() {
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture(options)
      .then(imageData => {
        this.image = `data:image/jpeg;base64,${imageData}`;
        this.FIRE.image = imageData;
      })
      .catch(error => {
        console.error(error);
      });
  }

  send_fire(){
    const toast = this.toastCtrl.create({
      message: 'Noticia enviada con exito',
      duration: 3000
    });

    this.FIRE.user = "zicaxzx@gmail.com";
    this.api.up_image(Math.random().toString(36).substring(2), this.FIRE.image);

    this.api.addNotice(this.FIRE).then(val => {
      toast.present();
    });
  }

}
