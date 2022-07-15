const { Router } = require('express')
const FinanceiroController = require('../controllers/financeiro.controller')
const validateFinanceiro = require('../schemas/financeiro.schema')
const auth = require('../middleware/auth.mdw')

const controller = new FinanceiroController()

const router = Router()

router.get('/', auth, controller.list)
router.get('/:id', auth, controller.listById)
router.post('/', auth, validateFinanceiro, controller.create)
router.put('/:id', auth, validateFinanceiro, controller.update)
router.delete('/:id', auth, controller.delete)

module.exports = router

