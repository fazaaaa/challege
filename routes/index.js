const express = require('express');
const router = express.Router();
const c = require('../controllers');
const mid = require('../middlewares/index');

router.post('/auth/register', c.auth.register);
router.post('/auth/login', c.auth.login);
router.get('/auth/whoami', mid.mustLogin, c.auth.whoami);

router.post('/user_game_biodata/create', mid.mustLogin, c.ubi.createB);
router.put('/user_game_biodata/update', mid.mustLogin, c.ubi.updateB);
router.delete('/user_game_biodata/delete', mid.mustLogin, c.ubi.delete);

router.post('/user_game_history/create', mid.mustLogin, c.uhi.createUH);
router.put('/user_game_history/update', mid.mustLogin, c.uhi.updateH);
router.delete('/user_game_history/delete', mid.mustLogin, c.uhi.delete);

module.exports = router;