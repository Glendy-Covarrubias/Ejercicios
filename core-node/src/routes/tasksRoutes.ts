import { Router } from 'express' // ESModules
import { authenticationController } from '../controllers/authenticationController'
import { getTasksController, setTaskController, updateTaskController, deleteTaskController, searchTaskController } from '../controllers/taskControllers'
import validateToken from './validateTokens'

const router = Router()

router.post('/login', authenticationController)

router.get('/', validateToken, getTasksController)
router.post('/', validateToken, setTaskController)
router.put('/:id', validateToken, updateTaskController)
router.delete('/:id', validateToken, deleteTaskController)
router.get('/:id', validateToken, searchTaskController)

export default router
