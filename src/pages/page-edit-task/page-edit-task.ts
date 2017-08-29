import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { TaskService } from '../../services/task.service';

@Component({
	selector: 'page-edit-task',
	templateUrl: './page-edit-task.html',
	styleUrls: ['./page-edit-task.scss']
})
export default class PageEditTaskComponent {

	private task: any = null;

	constructor(private route: ActivatedRoute,
  				private router: Router,
  				private taskService: TaskService){
		console.log('route.paramMap - ', route.paramMap)
	}
};
