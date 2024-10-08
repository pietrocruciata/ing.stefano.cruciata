
// import { reactive } from 'vue'


// export const store  = reactive({
// 	projects: [
// 		{
// 			id: 1,
// 			name: 'mole',
// 			img: '/img/mole.webp',
// 			committente: 'stefano cruciata',
// 			city: 'Torino',
// 			collabs: 'David',
// 			description: 'bello palazzo molto bello stupendo fantastico'
// 		}
// 	]
// });

import {reactive} from 'vue'
import data from '../db.json'
import axios from 'axios'

export const store = reactive({
	data: '',
	getdata(){
		axios.get('../db.json').then((res)=>{
			console.log(res);
			this.data = res.data.projects
			console.log(data);
			
			
		})
	}
})
