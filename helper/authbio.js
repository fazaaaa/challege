const {Item} = require('postman-collection');
const headers = [
    {
        key: 'Content-Type',
        value: 'application/json'
    },
    {
        key: 'cache-control',
        value: 'no-cache'
    },
    {
        key: 'Authorization',
        value: `{{Authorization}}`
    }

];

const createPayload = {
    user_id: '1',
    username: 'Baebychuu',
    rank: 'Master',
    negara: 'Indonesia'   
};

const updatePayload = {
    id: '1',
    user_id: '1',
    username: 'Baebychuu',
    rank: 'Elite II',
    negara: 'Indonesia'   
}

const deletePayload = {
    id: '1'   
};

const postmanCreate = new Item({
    name: 'create user biodata',
    request: {
        header: headers,
        url: `http://localhost:3000/user_game_biodata/create`,
        method: 'POST',
        body: {
            mode: 'raw',
            raw: JSON.stringify(createPayload)
        },
        auth: null
    }
});

const postmanUpdate = new Item({
    name: 'update user biodata',
    request: {
        header: headers,
        url: `http://localhost:3000/user_game_biodata/update`,
        method: 'PUT',
        body: {
            mode: 'raw',
            raw: JSON.stringify(updatePayload)
        },
        auth: null
    }
});

const postmanDelete = new Item({
    name: 'delete user biodata',
    request: {
        header: headers,
        url: `http://localhost:3000/user_game_biodata/delete`,
        method: 'DELETE',
        body: {
            mode: 'raw',
            raw: JSON.stringify(deletePayload)
        },
        auth: null
    }
});

module.exports = {postmanCreate,postmanDelete,postmanUpdate}
