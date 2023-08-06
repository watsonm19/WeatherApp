import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // GETs weather data from Weather by API-Ninjas (RapidAPI)
  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather', {
      headers: new HttpHeaders()
      .set('X-RapidAPI-Host', 'weather-by-api-ninjas.p.rapidapi.com')
      .set('X-RapidAPI-Key', 'cf1c64c7b7msh482cd900caa886ap185fb0jsnbd1cac808333'),
      params: new HttpParams()
      .set('city', cityName)
      .set('mode', 'json')
    })
  }
}
