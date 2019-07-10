let myDog = {
    coatType: 'fluffy',
    breed: 'husky',
    color: 'white',
    size: 'medium',
    bark: function bark(){
        console.log('woof')
    },
    describeYourself: function describeYourself(){
        console.log("hello, I am a " + this.breed);
    }
    }
    console.log(myDog.coatType);
    myDog.bark();
    myDog.describeYourself();