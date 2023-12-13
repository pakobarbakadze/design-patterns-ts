import { WeatherData } from "./weather-data";

interface Observer {
  update(temperature: number, humidity: number, pressure: number): void;
}

interface DisplayElement {
  display(): void;
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature!: number;
  private humidity!: number;

  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  public display(): void {
    console.log(
      `Current conditions: ${this.temperature} C and ${this.humidity} % humidity.`
    );
  }
}

class ForecastDisplay implements Observer, DisplayElement {
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update(): void {
    this.display();
  }

  public display(): void {
    console.log("Forecast: Watch out for cooler, rainy weather");
  }
}

export { Observer, CurrentConditionsDisplay, ForecastDisplay };
