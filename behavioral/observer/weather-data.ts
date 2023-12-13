import { Observer } from "./display";

interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

class WeatherData implements Subject {
  private observers: Observer[] = [];

  private temperature!: number;
  private humidity!: number;
  private pressure!: number;

  public registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  public removeObserver(o: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== o);
  }

  public notifyObservers(): void {
    this.observers.forEach((obs) =>
      obs.update(this.temperature, this.humidity, this.pressure)
    );
  }

  public mesurementChanged(): void {
    this.notifyObservers();
  }

  public setMesurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.mesurementChanged();
  }
}

export { WeatherData };
