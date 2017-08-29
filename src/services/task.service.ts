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
	getTasks(): Task[] {
		return initialTaskList;
	}
};