'use strict';

const express = require('express');
const router = express.Router();
const listCredentialController = require('../controllers/CredentialController/ListCredentialController');

router.get(`/findAll`, listCredentialController.findAll);
router.get(`/findByUserNameAndPassword`, listCredentialController.findCredentialByUserNameAndPassword);

module.exports = router;