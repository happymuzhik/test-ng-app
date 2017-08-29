import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Task from '../../models/task';

@Component({
	selector: 'page-task-list',
	templateUrl: './page-task-list.html',
	styleUrls: ['./page-task-list.scss']
})
export default class PageTaskListComponent {

	private taskList: Task[];

	constructor(private taskService: TaskService){
		this.taskList = taskService.getTasks();
	}
};
