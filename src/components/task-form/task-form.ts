import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'task-form',
	templateUrl: './task-form.html',
	styleUrls: ['./task-form.scss']
})
export default class TaskFormComponent {

	private task: any = null;

	constructor(f: NgForm){
		
	}

	onSubmit(f){
		console.log(f);
	}
};
