import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public folder: string;
  currentUser;
  constructor(private activatedRoute: ActivatedRoute, private auth: AuthService) { 
    
  }

  latitude: number;
  longitude: number;
  origin: any;
  destination: any;
  travelledDist: number;
  zoom: number;
  ngOnInit() {this.setCurrentLocation();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 20;
      });
    }
  }
  getDistance(event) {
    this.travelledDist = event.routes[0].legs[0].distance.value/1000;
  }

  async getDirection(position) {
    this.origin = {lat:  this.latitude.toString(), lng: this.longitude.toString() };
    this.destination = { lat: parseFloat(position.coords.lat), lng: parseFloat(position.coords.lng)};
  }

}


