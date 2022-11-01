const { Collection, Item } = require('postman-collection');

const fs = require('fs');
const { postmanRegister, postmanLogin } = require('./auth');
const { postmanCreate, postmanUpdate, postmanDelete } = require('./authbio');
const { postmanHisCreate, postmanHisUpdate, postmanHisDelete } = require('./authhi');

const postmanCollection = new Collection({
    info: {
        name: 'Chapter 5'
    },
    item: [postmanRegister, postmanLogin, postmanCreate, postmanUpdate, postmanDelete, postmanHisCreate, postmanHisUpdate, postmanHisDelete],
});

const collectionJSON = postmanCollection.toJSON();

fs.writeFile('./collection.json', JSON.stringify(collectionJSON, null, 2), (err) => {
    if (err){
        console.log(err);
    }
    console.log('File Saved');
});

 