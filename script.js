//initializing items
let items = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb', 'fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb'],
  itemsList = document.getElementsByClassName('item'),
  counter = 0, currentActiveItem, finalRating = 3 + ' Stars';
//shuffle items
function shuffleItems() {
  window.location.reload();
}

//Print items 
displayItems(4);
function displayItems(gridSize) {
  items.sort(function () { return .5 - Math.random(); });
  let itemsContainer = document.getElementById("container");
  if (gridSize % 2 === 0) {
    gridSize = gridSize + .2
  }
  for (let i = 0; i < items.length; i++) {
    let itemList = document.createElement('li');
    itemList.innerHTML = items[i];
    itemList.classList = 'item fa ' + items[i];
    itemList.style.width = 'calc((100% - ' + gridSize + '%) /' + gridSize + ')';
    itemList.addEventListener('click', function (e) {
      selectedItem(this);
    });
    itemsContainer.appendChild(itemList);
  }
}

function selectedItem(e) {
  counter = counter + 1;
  document.getElementById('moves').innerHTML = counter + ' Moves';
  document.getElementById('total-moves').innerHTML = counter + ' Moves';
  if (counter > 12 && counter < 19) {
    finalRating = 2 + ' Stars';
  } else if (counter > 20) {
    finalRating = 1 + ' Star';
  }
  document.getElementById('rating').innerHTML, document.getElementById('final-rating').innerHTML = finalRating;
  if (document.getElementsByClassName('active').length < 2) { e.classList.add('active'); }
  for (let i = 0; i < itemsList.length; i++) {
    itemsList[i].classList.remove('notsame')
  }
  let previousActiveItem = document.getElementsByClassName('active')[0];
  if (document.getElementsByClassName('active').length === 2) {
    currentActiveItem = document.getElementsByClassName('active')[1]
    if (previousActiveItem.innerText === currentActiveItem.innerText) {
      previousActiveItem.classList.add('selected');
      currentActiveItem.classList.add('selected');
      for (let i = 0; i < itemsList.length; i++) {
        itemsList[i].classList.remove('active')
      }
    } else {
      previousActiveItem.classList.add('notsame');
      currentActiveItem.classList.add('notsame');
      for (let i = 0; i < itemsList.length; i++) {
        itemsList[i].classList.remove('active');
        setTimeout(function () { itemsList[i].classList.remove('notsame'); }, 300);
      }
    }
  }
  if (document.getElementsByClassName('selected').length == 16) {
    successCard()
  }
}

function successCard() {
  document.getElementsByClassName("game-controls")[0].style.display, document.getElementById("container").style.display = 'none';
  document.getElementById("sucess-card").style.display = 'block';
}