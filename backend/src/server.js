import express from 'express'
import ConfigViewEngine from './config/viewEngine';
import initWebBrowser from './routes/web';

const app = express()
const port = 3000

ConfigViewEngine(app);
initWebBrowser(app);

app.listen(port, () => {
    console.log(`Đang khởi chạy trên port ${port}`)
})