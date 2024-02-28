import express, { Request, Response, NextFunction} from 'express'

const app = express()
app.use(express.json())

app.listen(3333, () => {
    console.log('testando test OnLine services!')
})
