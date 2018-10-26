const express = require('express');
const router  = express.Router();
const app = express();
app.use(express.static('views/images')); 

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/empresa', (req, res, next)=> {
  res.render('empresa');
})

module.exports = router;
