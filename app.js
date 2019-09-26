var person = {
    firstname : 'Gurpreet',
    lastname : 'Singh',
    name : 'sonu',
    greet : function (name, surname) {
        console.log(`Welcome ${this.firstname} ${name + ' '+ surname}`);
    }
}

person.greet('sonu', 'chohat');
person.greet.call({firstname: 'tappu'},'sahaz', 'chohat');

person.greet.apply({firstname: 'Arsh'},['Arshi', 'chohat']);