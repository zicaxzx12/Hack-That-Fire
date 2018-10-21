import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApisProvider } from '../../providers/apis/apis';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public weather_response = 0;
  public pressure= 0;
  public humedad=0;
  
  constructor(private api:ApisProvider, public navCtrl: NavController) {
    this.api.get_wheater("mochis").subscribe(data => {this.weather_response = ((data['main']['temp']) - 273.15); 
      this.pressure = (data['main']['temp_min'] - 273.15);
      this.humedad = (data['main']['temp_max']-273.15);
  });
    }


}
