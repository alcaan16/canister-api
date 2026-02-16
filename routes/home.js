import { Router } from 'express'

export const homeRouter = Router()


homeRouter.get('/', (request, response) => {
    return response.send('<h1>Pagina de inicio</h1>')
})
