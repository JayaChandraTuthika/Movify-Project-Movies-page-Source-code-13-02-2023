const express = require('express')
const cors = require('cors')
const path = require('path')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
app.use(cors())

const dbPath = path.join(__dirname, 'twitterClone.db')

let db = null

const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    app.listen(3005, () => {
      console.log('Server Running at http://localhost:3005/')
    })
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
    process.exit(1)
  }
}
initializeDbAndServer()

// middleware function

const authenticateToken = (request, response, next) => {
  let jwtToken
  const authHeader = request.headers['authorization']
  if (authHeader !== undefined) {
    jwtToken = authHeader.split(' ')[1]
  }
  if (jwtToken === undefined) {
    response.status(401)
    response.send('Invalid Access Token')
  } else {
    jwt.verify(jwtToken, 'MY_SECRET_TOKEN', async (error, payload) => {
      if (error) {
        response.send('Invalid Access Token')
      } else {
        request.username = payload.username
        next()
      }
    })
  }
}

// REGISTER API
app.post('/register', async (request, response) => {
  const {username, name, password, gender} = request.body

  const hashedPassword = await bcrypt.hash(password, 10)
  console.log(hashedPassword)
  const registerUserQuery = `
            INSERT INTO user (username,name,password,gender)
            VALUES (
                "${username}",
                '${name}',
                '${hashedPassword}',
                '${gender}'
            );`
  const selectUserQuery = `SELECT * FROM user WHERE username = '${username}';`
  const dbUser = await db.get(selectUserQuery)
  if (dbUser === undefined) {
    if (password.length > 5) {
      const dbResponse = await db.run(registerUserQuery)
      response.send('User created successfully')
    } else {
      response.status(400)
      response.send('Password is too short')
    }
  } else {
    response.status(400)
    response.send('User already exists')
  }
})

// API 2: LOGIN API
app.post('/login/', async (request, response) => {
  const {username, password} = request.body
  const selectUserQuery = `SELECT * FROM user WHERE username = '${username}'`
  const dbUser = await db.get(selectUserQuery)
  if (dbUser === undefined) {
    response.status(400)
    response.send('Invalid User')
  } else {
    const isPasswordMatched = await bcrypt.compare(password, dbUser.password)
    if (isPasswordMatched === true) {
      const payload = {
        username: username,
      }
      const jwtToken = jwt.sign(payload, 'MY_SECRET_TOKEN')
      response.send({jwtToken})
    } else {
      response.status(400)
      response.send('Invalid Password')
    }
  }
})

// API 3:GET TWEETS LATEST

app.get(
  '/users/',
  cors({origin: 'http://localhost:3003'}),
  async (request, response) => {
    //   let {username} = request
    //   console.log(username)
    const selectUsers = `
                        SELECT name FROM user`

    const dbResponse = await db.all(selectUsers)
    response.send(dbResponse)
  },
)
