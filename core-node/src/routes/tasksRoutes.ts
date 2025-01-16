import { Router } from 'express' // ESModules
import { authenticationController } from '../controllers/authenticationController'
import { getTasksController, setTaskController, updateTaskController, deleteTaskController, searchTaskController } from '../controllers/taskControllers'
import validateToken from './validateTokens'

const router = Router()

router.post('/login', authenticationController)

router.get('/', validateToken, getTasksController)
router.post('/', setTaskController)
router.put('/:id', updateTaskController)
router.delete('/:id', deleteTaskController)
router.get('/:id', searchTaskController)

export default router
