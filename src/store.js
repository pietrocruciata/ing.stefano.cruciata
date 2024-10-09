import {reactive} from 'vue'
import data from '../db.json'
import axios from 'axios'

export const store = reactive({
	data: [],
	getdata(){
		axios.get('../db.json').then((res)=>{
			console.log(res);
			this.data = res.data.projects
			console.log(data);
			
			
		})
	},

})
