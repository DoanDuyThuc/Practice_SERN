import express from 'express'
import homeController from '../controller/homeController'

const router = express.Router();

const initWebBrowser = (app) => {
    router.get('/', homeController.handleHelloWord);

    return app.use('/', router)
}

export default initWebBrowser;