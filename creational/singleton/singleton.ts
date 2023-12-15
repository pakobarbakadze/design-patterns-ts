class Singleton {
  private static instance: Singleton | null;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
      console.log("Created instance");
    }
    return Singleton.instance;
  }

  public logMe(): void {
    console.log(Singleton.instance);
  }
}

export default Singleton;
