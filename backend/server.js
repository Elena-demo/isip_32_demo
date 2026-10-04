import express from 'express'
import cors from 'cors'
import db from "./db.js"

const app = express()

app.use(cors())
app.use(express.json())

const port = 3000


app.post('/reg', (req, res) => {

    const { login, password, fio, phone, email } = req.body

    const sql = `INSERT INTO users(login, password, fio, phone, email) VALUES(?,?,?,?,?)`
    db.query(sql, [login, password, fio, phone, email], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(401).json({message: `Логин занят`})
        }
            return res.status(200).json({message: 'Пользователь успешно создан'})
    })
})

app.post('/application', (req, res) => {

    const { id_user, room, date_b, payment_method } = req.body

    const sql = `INSERT INTO booking(id_user, room, date_b, payment_method) VALUES(?,?,?,?)`
    db.query(sql, [id_user, room, date_b, payment_method], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(401).json({message: `Некорректные данные`})
        }
            return res.status(200).json({message: 'Завка добавлена'})
    })
})

app.post('/login', (req, res) => {
    const { login, password } = req.body
    const sql = `SELECT * FROM users WHERE login = ? AND password = ?`
    db.query(sql, [login, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({message:  `Ошибка БД`})
        }
        if (result.length === 0) {
            return res.status(401).json({ 
                message: "Неверный логин или пароль",
                user: false
            })
            
        }

        return res.status(200).json({
            message: "Вы успешно авторизовались",
            user: result[0]
        })
    })
})

app.get('/applications', (req, res) => {

    const sql = `select * from booking`
    db.query(sql, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(401).json({message: `Error DB`})
        }
            return res.status(200).json(result)
    })
})

app.listen(port, () => {
    console.log(`Сервер запущен на порту: ${port}`);
})