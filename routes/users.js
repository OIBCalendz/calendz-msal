/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

var express = require('express');
var router = express.Router();

var fetch = require('../fetch');

var { GRAPH_ME_ENDPOINT } = require('../authConfig');
const {AxiosError} = require("axios");

// custom middleware to check auth state
function isAuthenticated(req, res, next) {
  if (!req.session.isAuthenticated) {
    return res.redirect('/auth/signin'); // redirect to sign-in route
  }

  next();
};

router.get('/profile',
    isAuthenticated, // check if user is authenticated
    async function (req, res, next) {
      try {
        if(req.session.accessToken){
            const graphResponse = await fetch(GRAPH_ME_ENDPOINT, req.session.accessToken);

            if(graphResponse.officeLocation == "C&D"){
                res.status(200).json({
                    "givenName": graphResponse.givenName,
                    "surname": graphResponse.surname,
                    "mail": graphResponse.mail
                })
            }else{
                res.status(401).send("Invalid permission. You aren't from C&D Organization.")
            }
        }else{
            res.status(400).send("Bad token. Please acquire it.")
        }

      } catch (error) {
          if(error instanceof AxiosError){
              res.status(error.message.response.status).send(error.message.response.message);
          }else{
              console.log(error)
              next(error);
          }
      }
    }
);

module.exports = router;