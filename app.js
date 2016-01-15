var $addButton = $('#add');
var $todosContainer = $('#todos');
var localStorage = window.localStorage;
var prioritiesApp = JSON.parse(localStorage.getItem('prioritiesApp')) || {};

$addButton.on('click', function(){
    var userInput = prompt('Enter description:');
    if (userInput === null || userInput === ''){
        return;
    }
    prioritiesApp[userInput] = 0;
    updateLocalStorage();
    renderItems();
});

$todosContainer.on('click', '.todo', function(){
    var key = $(this).find('.description').text();
    prioritiesApp[key]++;
    updateLocalStorage();
    renderItems();
});

$(document).ready(function(){
    renderItems();
});

function updateLocalStorage(){
    localStorage.setItem('prioritiesApp', JSON.stringify(prioritiesApp));
}

function renderItems(){
    var parsedPrioritiesApp = JSON.parse(localStorage.getItem('prioritiesApp'));
    $todosContainer.empty();
    for (var item in parsedPrioritiesApp){
        var todo = '<div class="todo"><p class="description">' + item + '</p><span class="taps">' + parsedPrioritiesApp[item] + '</span></div>';
        $todosContainer.append(todo);
    }
}