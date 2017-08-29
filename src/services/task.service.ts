import { Injectable } from '@angular/core';
import Task from '../models/task';

const initialTaskList = [
	{
		text: 'task1',
		id: 1,
	},
	{
		text: 'task2',
		id: 2,
	}
];

@Injectable()
export class TaskService {

	private tasks: Task[];

	constructor(){
		this.tasks = initialTaskList;
	}

	getTasks(): Task[] {
		return this.tasks;
	}
	getTaskById(id): Task {
		return this.tasks.find( task => task.id == id );
	}
};