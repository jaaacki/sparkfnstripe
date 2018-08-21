const { Router } = require('express')
const axios = require ('axios');
const router = Router()
const FormData = require('form-data');
const request = require('request');
// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

router.post('/connect', async (req, res, next) => {

  // Need request module to send form data this fucking
  await request.post('https://connect.stripe.com/oauth/token', { form:{ 
      'client_secret': req.body.client_secret,
      'code': req.body.code,
      'grant_type': req.body.grant_type
    }
  }, function(error, response, body) {
    //console.log(body);
    res.json(body);
  });

  

});
/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
