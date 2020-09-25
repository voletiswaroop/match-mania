//initializing cards
let arrayData = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb'],
  itemsList = document.getElementsByClassName('item'), counter = 0, currentActiveItem, finalRating = 3 + ' Stars', items = [...arrayData, ...arrayData];

//shuffle cards
function shuffleItems() {
  document.getElementById("container").classList.add('shuffle-cards')
  for (let i = 0; i < itemsList.length; i++) { itemsList[i].className = 'item'; }
  setTimeout(function () {
    document.getElementById("container").innerHTML = ''
    displayItems(4);
    document.getElementById("container").className = '';
  }, 1000)
}

// select number of cards in a row
displayItems(4);
//Print cards 
function displayItems(gridSize) {
  shuffledCards = items.sort(function () { return .5 - Math.random(); });
  let itemsContainer = document.getElementById("container");
  gridSize % 2 === 0 ? gridSize = gridSize + .2 : ''
  for (let i = 0; i < shuffledCards.length; i++) {
    let itemList = document.createElement('li');
    itemList.innerHTML = shuffledCards[i];
    itemList.classList = 'item fa ' + shuffledCards[i];
    itemList.style.width = 'calc((100% - ' + gridSize + '%) /' + gridSize + ')';
    itemList.addEventListener('click', function (e) {
      selectedItem(this);
    });
    itemsContainer.appendChild(itemList);
  }
}

function selectedItem(e) {
  counter = counter + 1;
  counter > 15 && counter < 29 ? finalRating = 2 + ' Stars' : counter > 29 ? finalRating = 1 + ' Star' : '';

  document.getElementById('moves').innerHTML = (counter > 9 ? counter : '0' + counter) + ' Moves';
  document.getElementById('rating').className = finalRating.replaceAll(' ', '-');
  document.getElementsByClassName('active').length < 2 ? e.classList.add('active') : ''

  for (let i = 0; i < itemsList.length; i++) { itemsList[i].classList.remove('notsame') }

  let previousActiveItem = document.getElementsByClassName('active')[0];
  if (document.getElementsByClassName('active').length === 2) {
    currentActiveItem = document.getElementsByClassName('active')[1]
    if (previousActiveItem.innerText === currentActiveItem.innerText) {
      previousActiveItem.classList.add('selected');
      currentActiveItem.classList.add('selected');
      for (let i = 0; i < itemsList.length; i++) { itemsList[i].classList.remove('active') }
    } else {
      previousActiveItem.classList.add('notsame');
      currentActiveItem.classList.add('notsame');
      for (let i = 0; i < itemsList.length; i++) {
        itemsList[i].classList.remove('active');
        setTimeout(function () { itemsList[i].classList.remove('notsame'); }, 300);
      }
    }
  }
  if (document.getElementsByClassName('selected').length === items.length) {
    document.getElementById('total-moves').innerHTML = counter + ' Moves';
    document.getElementById('final-rating').className = finalRating.replaceAll(' ', '-');
    successCard()
  }
}

function successCard() {
  setTimeout(function () {
    document.getElementsByClassName("game-controls")[0].style.display, document.getElementById("container").style.display = 'none'
    document.getElementById("sucess-card").style.display = 'block';
  }, 1000)
}