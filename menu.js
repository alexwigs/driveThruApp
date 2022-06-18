// MENU ALGORITHM
// create an object class for each item
// each object pulls information from the menu options database
// create a template html function and add each item to the current html

// a snapshot is a picture of what the collection of data looks like in that period of time
db.collection('drinks').get().then((snapshot) => {
    // when we have the data
    console.log(snapshot);
}).catch(err => {
    console.log(err);
})

