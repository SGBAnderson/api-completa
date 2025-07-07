import express from 'express'

// const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json('Inicial')
})

app.get('/user', (req, res) => {
  res.json('Rota User')
})

app.listen(3000, () => {
  console.log('Servidor rodando em http//localhost:3000')
})

