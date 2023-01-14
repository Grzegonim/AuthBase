const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/logged', (req, res) => {
  if(!req.user) {
    res.redirect('/user/no-permission');
  } else {
    res.render('logged', {
      name: req.user.displayName,
      avatar: req.user.photos[0].value
    });
  }
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/user/profile/', (req, res) => {
  if(!req.user) {
    res.redirect('/user/no-permission');
  } else {
    res.render('profile')
  }
});

router.get('/user/profile/settings', (req, res) => {
  if(!req.user) {
    res.redirect('/user/no-permission');
  } else {
    res.render('settings')
  }
});

module.exports = router;