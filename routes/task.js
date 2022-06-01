const {getAllTasks, createTask, getSingleTask, editTask, deleteTask } = require('../controllers/taskController');

const router=require('express').Router();
router.get('/',getAllTasks);
router.get('/:id',getSingleTask);
router.post('/',createTask);
router.patch('/:id',editTask);
router.delete('/:id',deleteTask);
module.exports=router;