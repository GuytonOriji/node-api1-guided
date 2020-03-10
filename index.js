const express = require('express')
const shortid = require('shortid')

let hubs = []
let lessons = []

	const server = express()

		server.use(express.json())

	server.get('/', (req,res)=>{

			res.status(200).json({api:'running...'})

	})





	server.get('/hello', (req,res)=>{

			res.status(200).json({hello:'Web 27'})

	})










	server.post('/api/hubs', (req,res)=>{

			const newHub = req.body
			 newHub.id = shortid.generate()

			hubs.push(newHub)


			res.status(201).json({created:newHub})

	})



	server.get('/api/hubs', (req,res)=>{

			res.status(200).json({hubs:hubs})

	})



	server.get('/api/hubs/:id', (req,res)=>{
			const id_ = req.params.id
			const hub = hubs.filter(hu=>{
				if(hu.id === id_){
					return hu

				}
		})

			res.status(200).json({hub:hub[0]})

	})

	










	server.post('/api/lessons', (req,res)=>{

			const newLesson = req.body
			 newLesson.id = lessons.length + 1

			lessons.push(newLesson)


			res.status(201).json({created:newLesson})

	})

	server.get('/api/lessons/:id' , (req,res)=>{
		const id_ = parseInt(req.params.id)
		const lesson = lessons.filter(les=>{
				if(les.id === id_){
					return les

				}
		})
		res.status(200).json({lesson:lesson[0]})
	})

	server.get('/api/lessons' , (req,res)=>{
		res.status(200).json({lessons:lessons})
	})

	const PORT = 5000
		server.listen(PORT, ()=>console.log(`\n ** API listening on http://localhost:${PORT} ** \n`))