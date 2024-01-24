/*
TODO:
- install sortablejs

Functions TODO:

- when button clicked, open new task dialog
- when task entered and saved, write to file
- read from file to display task

- allow resorting with sortablejs

- when task marked as done, award xp.money according to array
- write xp/money to file
- read from file to display xp/money

- xp bar?

Later TODO:
- wardrobe function
- shop function
- stat counter

*/


import Sortable from 'Sortable-master/sortablejs';

var firstList = document.getElementById('first-list');
var firstList = Sortable.create(firstList);