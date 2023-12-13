import { CurrentConditionsDisplay, ForecastDisplay } from "./display";
import { WeatherData } from "./weather-data";

const weatherData = new WeatherData();

new CurrentConditionsDisplay(weatherData);
new ForecastDisplay(weatherData);

weatherData.setMesurements(20, 70, 30);
weatherData.setMesurements(25, 75, 30);
