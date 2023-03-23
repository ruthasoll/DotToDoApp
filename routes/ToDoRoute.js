const {Router} = require('express')
const {saveToDo} = require('../controllers/ToDoController')
const {getToDo} = require('../controllers/ToDoController')
 const router = Router()
router.get('/',getToDo)
router.post('/save', saveToDo) 
module.exports = router