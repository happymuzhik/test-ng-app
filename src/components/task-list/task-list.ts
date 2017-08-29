import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import Task from '../../models/task';

@Component({
	selector: 'task-list',
	templateUrl: './task-list.html',
	styleUrls: ['./task-list.scss']
})
export default class TaskListComponent {

	@Input('task-list')taskList: Task[];

	constructor(private router: Router){
	}

	onSelect(task){
		this.router.navigate(['/task', task.id]);
	}
};
