var myApp = angular.module('myApp', []);

myApp.controller('GuessWhoController', function(){
    var guess = this;
   
guess.addPeople = function (person){
     var newPeople = {name: guess.nameIn, github: guess.githubIn};
     people.push(newPeople)
     console.log(newPeople);
 };

guess.displayName = function(person){
    
   guess.message = ("This is" + person.name);
};
 
var people = [{name: 'Sarah', github: 'SarahHarrington'}, 
{name: 'Holly', github: 'hollytuhake'}, 
{name: 'Alex', github: 'alexanderbliss'}];

guess.people = people;
console.log(guess.people);
});