import { Component } from '@angular/core';

@Component({
	selector: 'task-list',
	templateUrl: './task-list.html',
	styleUrls: ['./task-list.scss']
})
export default class TaskListComponent {

	public taskList: any = [
		{
			text: 'task1'
		},
		{
			text: 'task2'
		}
	]

	constructor(){
		
	}
};
