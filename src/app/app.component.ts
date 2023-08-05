import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }

  // initial values
  cityName: string = 'Portland';
  lastCityName: string = '';
  // stores weather data info
  weatherData?: WeatherData;

  // default city - portland - is displayed upon loading page
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    if (this.cityName.trim() !== '') {
      this.lastCityName = this.cityName;
      this.cityName = '';
    }
  }

  // form submit function - places city name in HTML and clears cityName variable
  onSubmit() {
    this.getWeatherData(this.cityName);
    if (this.cityName.trim() !== '') {
      this.lastCityName = this.cityName;
      this.cityName = '';
    }
  }

  // GETs weather data from Weather by API-Ninjas (RapidAPI)
  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    })
  }

  title = 'WeatherApp';
}