const {Item} = require('postman-collection');
const headers = [
    {
        key: 'Content-Type',
        value: 'application/json'},
    {
        key: 'cache-control',
        value: 'no-cache'
    }
    
];
const registerPayload = { 
    name: 'fazaa',
    email: 'faza96@mail.com', 
    password: 'faza12345'};

const loginPayload = {
    email: 'faza96@mail.com',
    password: 'faza12345'
};


const postmanRegister = new Item({
    name: 'register',
    request: {
        header: headers,
        url: `http://localhost:3000/auth/register`,
        method: 'POST',
        body: {
            mode: 'raw',
            raw: JSON.stringify(registerPayload)
        },
        auth: null
    }
});

const token = `pm.environment.set('Authorization', pm.response.json().data.token);`
const postmanLogin = new Item({
    name: 'login',
    request: {
        header: headers,
        url:  `http://localhost:3000/auth/login`,
        method: 'POST',
        
        body: {
            mode: 'raw',
            raw: JSON.stringify(loginPayload)
        },
        auth: {
            type: 'bearer',
            bearer: [
                {
                    key: 'token',
                    value: '{{Authorization}}',
                }
            ]
        }},
    event: [
        {
            listen: 'test',
            script: {
                type: 'text/javascript',
                exec: token
            }
        }
    ]
    
});

module.exports = {postmanRegister, postmanLogin}