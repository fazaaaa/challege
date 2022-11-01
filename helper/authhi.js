const {Item} = require('postman-collection');
const headers = [
    {
        key: 'Content-Type',
        value: 'application/json'},
    {
        key: 'cache-control',
        value: 'no-cache'
    },
    {
        key: 'Authorization',
        value: `{{Authorization}}`
    }
];

const createHisPayload = {
    user_id: '1',
    hasilAkhir : 'Winning',
    ratinguser: '4',
    waktu: '10-09-2022'   
};

const updateHisPayload = {
    id: '1',
    user_id: '1',
    hasilAkhir: 'Lose',
    ratinguser: '7',
    waktu: '11-09-2022'   
}

const deleteHisPayload = {
    id: '1'   
};

const postmanHisCreate = new Item({
    name: 'create user history',
    request: {
        header: headers,
        url: `http://localhost:3000/user_game_history/create`,
        method: 'POST',
        body: {
            mode: 'raw',
            raw: JSON.stringify(createHisPayload)
        },
        auth: null
    }
});

const postmanHisUpdate = new Item({
    name: 'update user history',
    request: {
        header: headers,
        url: `http://localhost:3000/user_game_history/update`,
        method: 'PUT',
        body: {
            mode: 'raw',
            raw: JSON.stringify(updateHisPayload)
        },
        auth: null
    }
});

const postmanHisDelete = new Item({
    name: 'delete user history',
    request: {
        header: headers,
        url: `http://localhost:3000/user_game_history/delete`,
        method: 'DELETE',
        body: {
            mode: 'raw',
            raw: JSON.stringify(deleteHisPayload)
        },
        auth: null
    }
});

module.exports = {postmanHisCreate,postmanHisDelete,postmanHisUpdate}
