// finalOrder algorithm

// pull array from local host
// display array of objects onto html
// each item will have a plus and minus sign in it's card, which will let users add or subtract duplicate items

const addToOrder = curr => {
    let num = curr+1;
    let itemNum = num.toString();
    let item = JSON.parse(localStorage.getItem(itemNum));
    let picName = item.id;
    picName = picName.substr(1);

    let list = document.querySelector('#orderList');
    console.log(list);

    let html = `
    <div class="card card-block mx-3 my-auto mr-2">
        <img src="images/menu/${picName.name}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${(item.price)}</p> 
           <div class = "btn btn-primary" >
           <button>remove</button>
            </div>
        </div>
    </div>
    `;
    
    list += html;
    console.log('success');
};

for(i=0; i<localStorage.length; i++){
    addToOrder(i);
}




