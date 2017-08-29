import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import Task from '../../models/task';

@Component({
	selector: 'task-form',
	templateUrl: './task-form.html',
	styleUrls: ['./task-form.scss']
})
export default class TaskFormComponent {

	@Input()task: Task = new Task();

	constructor(f: NgForm){
		
	}

	onSubmit(f){
		console.log(f);
	}

};
