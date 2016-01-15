var $addButton = $('#add');
var $todosContainer = $('#todos');
var localStorage = window.localStorage;
var prioritiesApp = JSON.parse(localStorage.getItem('prioritiesApp')) || {};

$addButton.on('click', function(){
    var userInput = prompt('Enter description:');
    prioritiesApp[userInput] = 0;
    localStorage.setItem('prioritiesApp', JSON.stringify(prioritiesApp));
    renderItems();
});

$todosContainer.on('click', 'todo', function(){return;});

$(document).ready(function(){
    renderItems();
});

function renderItems(){
    var parsedPrioritiesObj = JSON.parse(localStorage.getItem('prioritiesApp'));
    $todosContainer.empty();
    for (var item in parsedPrioritiesObj){
        var todo = '<div class="todo"><p class="description">' + item + '</p><span class="taps">' + parsedPrioritiesObj[item] + '</span></div>';
        $todosContainer.append(todo);
    }
}