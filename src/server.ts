import express from 'express'
import multer from 'multer'
import path from 'path'

const app = express()
app.use(express.json())

const upload = multer({dest: path.join(__dirname, 'uploads')})

app.post('/upload', upload.single('file'), (request, response) =>{
    console.log("sucesso ...")
    console.log(request.file)
})

app.post('/uploads', upload.array('file'), (request, response) =>{
    console.log("sucesso ...")
    console.log(request.file)
})

app.listen(3333, () => {
    console.log('testando test OnLine services!')
})
