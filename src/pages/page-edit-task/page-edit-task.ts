import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TaskService } from '../../services/task.service';
import Task from '../../models/task';

@Component({
	selector: 'page-edit-task',
	templateUrl: './page-edit-task.html',
	styleUrls: ['./page-edit-task.scss']
})
export default class PageEditTaskComponent {

	private taskId: number;
	private task: Task = new Task();

	constructor(private route: ActivatedRoute,
				private router: Router,
				private taskService: TaskService){
		const _this = this;		
		this.route.params.subscribe( param => _this.taskId = param.id);
	}

	ngOnInit(){
		this.task = this.taskService.getTaskById(this.taskId);
	}
};
