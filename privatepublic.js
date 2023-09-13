class vehicle{
    #capacity="4000W";
    constructor(name, capacity)
    {
        this.name=name;
        this.#capacity=capacity;
    }
    get getCapacity()
    {
        return this.#capacity;
    }
    set setCapacity(capacity)
    {
        this.#capacity=capacity;
    }
    startengine()
    {
         console.log(`${this.name} can start and has capacity of ${this.#capacity}`);
    }
    stopengine()
    {
        console.log(`${this.name} can stop and has capacity of ${this.#capacity}`);
    }
    run()
    {
        console.log(`${this.name} can run on manual mode`)
    }
    static brake()
    {
        console.log(`We are calling static method`);
    }
}
class twoW extends vehicle{
 constructor(name, capacity){
     super(name, capacity);
     this. tyre=2;
     this.engine="3000c";
 }
 
 print(){
     console.log(this.name);
     console.log(this.getCapacity);
     console.log(this.tyre);
     console.log(this.engine);
 }
}
class threeW extends vehicle{
    constructor(name, capacity){
        super(name, capacity);
        this.tyre=3;
        this.engine="6000c";
    }
    
    print(){
        console.log(this.name);
        console.log(this.getCapacity);
        console.log(this.tyre);
        console.log(this.engine);
    }
   }
    obj1=new twoW("Hammer","2000");
    obj1.print();
    obj2=new vehicle("Japan","2793");
    obj2.startengine();
    vehicle.brake()
   