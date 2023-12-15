class Light {
  public on(): void {
    console.log("Light is on");
  }

  public off(): void {
    console.log("Light is off");
  }
}

class GarageDoor {
  public up(): void {
    console.log("Garage door up");
  }

  public down(): void {
    console.log("Garage door down");
  }

  public stop(): void {
    console.log("Garage door stop");
  }

  public lightOn(): void {
    console.log("Garage light on");
  }

  public lightOff(): void {
    console.log("Garage light off");
  }
}

export { Light, GarageDoor };
