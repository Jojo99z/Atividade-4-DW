const PORTA = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const {response} = require('express')

const app = express()
const noticias = [
    {
        name: 'A Bola',
        adress: 'https://www.abola.pt/Modalidades',
        base: '',
    },
    {
        name:'Record',
        address: 'https://www.record.pt/futebol?ref=Masterpage_Menu',
        base: '',
    },
    {
        name: 'O Jogo',
        address:'https://www.ojogo.pt/futebol.html',
        base: '',
    }
]

const articles = []

noticias.forEach(noticias => {
    axios.get(noticias.address,)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
   
            $('a:contains("ABola")',html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
    
                articles.push({
                    title,
                    url: noticias.base + url,
                    source: noticias.name
                })
            })
        })
    })
    
app.get('/', (req,res) => {
    res.json('Welcome to my A Bola News API')
 })
    
app.get('/futeboliga', (req,res) => {
    res.json(noticias)
})
app.get('/futeboliga/:NoticiasID', async(req, res) => {
    const NoticiasID = req.params.noticiasID

    const enderecoNoticias = sites.filter(site => noticias.name == NoticiasID)[0].adress
    const NoticiasBase = sites.filter(site => noticias.name == NoticiasID)[0].base
        
    
    axios.get(noticiasAdress)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const specificArticles = []
    
            $('a:contains("Abola")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                specificArticles.push({
                    title,
                    url: NoticiaisBase + url,
                    source: NoticiasId
                })
            })
            res.json(specificArticles)
        }).catch(err => console.log(err))
    
        console.log(enderecoNoticias)
    })
    
    app.listen(PORTA, () => console.log(`Servidor a correr na porta ${PORTA}`))