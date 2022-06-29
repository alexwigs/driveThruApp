// MENU ALGORITHM
// create an object class for each item
// each object pulls information from the menu options database
// create a template html function and add each item to the current html

const hotCoffeesList = document.querySelector('.hotCoffees');
const hotTeasList = document.querySelector('.hotTeas');
const hotDrinksList = document.querySelector('.hotDrinks');
const frapList = document.querySelector('.frap');
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
    <div class="card card-block menuItem mx-2 my-auto mr-2">
        <img src="images/cart.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${menuItem.name}</h5>
        <p class="card-text">temp p tag</p>
        <a href="#" class="btn btn-primary">View ingredients</a>
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
        case 'frap':
            frapList.innerHTML += html;
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
            snacks.innerHTML += html;
            break;

    }

    // if (colName == 'coldDrinks') {
    //     coldDrinksList.innerHTML += html;
    // }

    // if (hotBreakfastList.classList.contains('hotBreakfast')) {
    //     console.log(icedTeasList.classList);
    // }

    // switch()
}



// a snapshot is a picture of what the collection of data looks like in that period of time
db.collection('hotCoffees').get().then((snapshot) => {
    // when we have the data
    const collectionName = 'hotCoffees';
    snapshot.docs.forEach(doc => {
        // console.log(doc.data());
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('hotTeas').get().then((snapshot) => {
    // when we have the data
    const collectionName = 'hotTeas';
    snapshot.docs.forEach(doc => {
        // console.log(doc.data());
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('hotDrinks').get().then((snapshot) => {
    // when we have the data
    const collectionName = 'hotDrinks';
    snapshot.docs.forEach(doc => {
        // console.log(doc.data());
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('frap').get().then((snapshot) => {
    // when we have the data
    const collectionName = 'frap';
    snapshot.docs.forEach(doc => {
        // console.log(doc.data());
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('coldCoffees').get().then((snapshot) => {
    // when we have the data
    const collectionName = 'coldCoffees';
    snapshot.docs.forEach(doc => {
        // console.log(doc.data());
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('icedTeas').get().then((snapshot) => {
    // when we have the data
    const collectionName = 'icedTeas';
    snapshot.docs.forEach(doc => {
        // console.log(doc.data());
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('coldDrinks').get().then((snapshot) => {
    // when we have the data
    const collectionName = 'coldDrinks';
    snapshot.docs.forEach(doc => {
        // console.log(doc.data());
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('hotBreakfast').get().then((snapshot) => {
    // when we have the data
    const collectionName = 'hotBreakfast';
    snapshot.docs.forEach(doc => {
        // console.log(doc.data());
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('bakery').get().then((snapshot) => {
    // when we have the data
    const collectionName = 'bakery';
    snapshot.docs.forEach(doc => {
        // console.log(doc.data());
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('lunch').get().then((snapshot) => {
    // when we have the data
    const collectionName = 'lunch';
    snapshot.docs.forEach(doc => {
        // console.log(doc.data());
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('snacks').get().then((snapshot) => {
    // when we have the data
    const collectionName = 'snacks';
    snapshot.docs.forEach(doc => {
        // console.log(doc.data());
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});

db.collection('oatmeal').get().then((snapshot) => {
    // when we have the data
    const collectionName = 'oatmeal';
    snapshot.docs.forEach(doc => {
        // console.log(doc.data());
        addItem(doc.data(), collectionName);
    });
}).catch(err => {
    console.log(err);
});



console.log('test');

