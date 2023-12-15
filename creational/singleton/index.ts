import Singleton from "./singleton";

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2);

instance1.logMe();
instance2.logMe();
