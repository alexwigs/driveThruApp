// MENU ALGORITHM
// create an object class for each item
// each object pulls information from the menu options database
// create a template html function and add each item to the current html

const hotCoffeesList = document.querySelector('.hotCoffees');
const hotTeasList = document.querySelector('.hotTeas');
const hotDrinksList = document.querySelector('.hotDrinks');
const frapsList = document.querySelector('.fraps');
const coldCoffeesList = document.querySelector('.coldCoffees');
const icedTeasList = document.querySelector('.icedTeas');
const coldDrinksList = document.querySelector('.coldDrinks');
const hotBreakfastList = document.querySelector('.hotBreakfast');
const bakeryList = document.querySelector('.bakery');
const lunchList = document.querySelector('.lunch');
const snacks = document.querySelector('.snacks');
const oatmeal = document.querySelector('.oatmeal');

const addItem = (menuItem, colName) => {
    let html = `
    <div class="card card-block menuItem mx-3 my-auto mr-2">
        <img src="images/cart.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${menuItem.name}</h5>
     <!-- add .toFixed to price after database is ready -->
        <p class="card-text">$${(menuItem.price).toFixed(2)}</p> 
           <div class = "btn btn-primary" >
                <class="btn btn-primary" class = "popup" onclick = "myFunction()" >View Ingredients</a>
                <span class = "popuptext"  id="myPopup">${menuItem.ingredients}</span>
            </div>
        </div>
    </div>
    `;

    switch(colName) {
        case 'hotCoffees':
            hotCoffeesList.innerHTML += html;
            break;
        case 'hotTeas':
            hotTeasList.innerHTML += html;
            break;
        case 'hotDrinks':
            hotDrinksList.innerHTML += html;
            break;
        case 'fraps':
            frapsList.innerHTML += html;
            break;
        case 'coldCoffees':
            coldCoffeesList.innerHTML += html;
            break;
        case 'icedTeas':
            icedTeasList.innerHTML += html;
            break;
        case 'coldDrinks':
            coldDrinksList.innerHTML += html;
            break;
        case 'hotBreakfast':
            hotBreakfastList.innerHTML += html;
            break;
        case 'bakery':
            bakeryList.innerHTML += html;
            break;
        case 'lunch':
            lunchList.innerHTML += html;
            break;
        case 'snacks':
            snacks.innerHTML += html;
            break;
        case 'oatmeal':
            oatmeal.innerHTML += html;
            break;
        default:
            console.log('an error has occured');
            break;
    };

    // if (colName == 'coldDrinks') {
    //     coldDrinksList.innerHTML += html;
    // }

    // if (hotBreakfastList.classList.contains('hotBreakfast')) {
    //     console.log(icedTeasList.classList);
    // }

    // switch()
}


// When the user clicks view ingredients open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

// a snapshot is a picture of what the collection of data looks like in that period of time
db.collection('hotCoffees').get().then((snapshot) => {
    const collectionName = 'hotCoffees';
    snapshot.docs.forEach(doc => {
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('hotTeas').get().then((snapshot) => {
    const collectionName = 'hotTeas';
    snapshot.docs.forEach(doc => {
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('hotDrinks').get().then((snapshot) => {
    const collectionName = 'hotDrinks';
    snapshot.docs.forEach(doc => {
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('fraps').get().then((snapshot) => {
    const collectionName = 'fraps';
    snapshot.docs.forEach(doc => {
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('coldCoffees').get().then((snapshot) => {
    const collectionName = 'coldCoffees';
    snapshot.docs.forEach(doc => {
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('icedTeas').get().then((snapshot) => {
    const collectionName = 'icedTeas';
    snapshot.docs.forEach(doc => {
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('coldDrinks').get().then((snapshot) => {
    const collectionName = 'coldDrinks';
    snapshot.docs.forEach(doc => {
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('hotBreakfast').get().then((snapshot) => {
    const collectionName = 'hotBreakfast';
    snapshot.docs.forEach(doc => {
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('bakery').get().then((snapshot) => {
    const collectionName = 'bakery';
    snapshot.docs.forEach(doc => {
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('lunch').get().then((snapshot) => {
    const collectionName = 'lunch';
    snapshot.docs.forEach(doc => {
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('snacks').get().then((snapshot) => {
    const collectionName = 'snacks';
    snapshot.docs.forEach(doc => {
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('oatmeal').get().then((snapshot) => {
    const collectionName = 'oatmeal';
    snapshot.docs.forEach(doc => {
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});



console.log('test');

