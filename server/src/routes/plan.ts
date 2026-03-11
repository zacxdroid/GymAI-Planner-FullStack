import { Router } from 'express'
import { generatePlan } from '../../controllers/planController'

export const planRouter =  Router()

planRouter.post("/generate", generatePlan)