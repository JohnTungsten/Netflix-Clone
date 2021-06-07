const tabItems = document.querySelectorAll('.tab-item'); 
const tabContentItems = document.querySelectorAll('.tab-content-item'); 

// SELECT TAB CONTENT ITEM
function selectItem(e){
  removeBorder();
  removeShow();
  // ADD BORDER TO CURRENT TAB
  this.classList.add('tab-border');
  // GRAB CONTENT ITEM FROM DOM
  const tabConetentItem = document.querySelector(`#${this.id}-content`)
  // ADD SHOW CLASS
  tabConetentItem.classList.add('show');
}

function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-border'))
}
function removeShow(){
  tabContentItems.forEach(item => item.classList.remove('show'))
}

// LISTEN FOR TAB CLICK
tabItems.forEach(item => item.addEventListener('click',selectItem));
