import express from 'express'

const router = express.Router();

const initWebBrowser = (app) => {
    router.get('/', (req, res) => {
        return res.send('Hello Worldss!')
    })

    return app.use('/', router)
}

export default initWebBrowser;