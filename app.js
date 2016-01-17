var $addButton = $('#add');
var $todosContainer = $('#todos');
var localStorage = window.localStorage;
var prioritiesApp = JSON.parse(localStorage.getItem('prioritiesApp')) || {};
var timer;
var touchDuration = 1000;

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
    var $key = $(this).find('.description').text();
    prioritiesApp[$key]++;
    updateLocalStorage();
    renderItems();
});

$todosContainer.on('touchstart', '.todo', function(){
    var $this = $(this);
    var $key = $this.find('.description').text();
    timer = setTimeout(function(){
        if (confirm('Remove?')){
            $todosContainer.find($this).remove();
            delete prioritiesApp[$key];
            updateLocalStorage();
            renderItems();
        }
    }, touchDuration);
});

$todosContainer.on('touchend', '.todo', function(){
    if (timer){
        clearTimeout(timer);
    }
});

$(document).ready(function(){
    renderItems();
});

function sortItems(arr){
    return arr.sort(function(a, b){
        return parseInt($(a).find('.taps').text()) < parseInt($(b).find('.taps').text());
    });
}

function updateLocalStorage(){
    localStorage.setItem('prioritiesApp', JSON.stringify(prioritiesApp));
}

function renderItems(){
    var parsedPrioritiesApp = JSON.parse(localStorage.getItem('prioritiesApp'));
    $todosContainer.empty();
    var sorted = [];
    for (var item in parsedPrioritiesApp){
        var todo = '<div class="todo"><p class="description">' + item + '</p><span class="taps">' + parsedPrioritiesApp[item] + '</span></div>';
        sorted.push(todo);
    }
    sortItems(sorted);
    $todosContainer.append(sorted);
}