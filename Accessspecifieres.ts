

class Animal {
  // protected sound: string ;
    constructor(public sound: string) {
        console.log(`Animal Constuctor called`);

    }
}


//inside child class
class Dog extends Animal {
    show() {
        console.log(`Dog class function call ${this.sound}`);

    }
}

let ans : Animal = new Animal(`Cow`);
console.log(`Output of Animal Class => ${ans.sound}`);


let ans2: Dog =new Dog(`Bhau`);
ans2.show();


