import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
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
  constructor(private geolocation: Geolocation, private camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
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
      })
      .catch(error => {
        console.error(error);
      });
  }

}
