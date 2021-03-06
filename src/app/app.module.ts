import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm }   from '@angular/forms';

import { TaskService } from '../services/task.service';

import { AppComponent } from './app.component';
import PageTaskListComponent from '../pages/page-task-list/page-task-list';
import PageEditTaskComponent from '../pages/page-edit-task/page-edit-task';

import TaskListComponent from '../components/task-list/task-list';
import TaskFormComponent from '../components/task-form/task-form';

const appRoutes: Routes = [
	{ path: 'task/:id', component: PageEditTaskComponent },
	{ path: 'tasks', component: PageTaskListComponent },
	{ path: '',   redirectTo: '/tasks', pathMatch: 'full' },
	// { path: '**', component: PageTaskListComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		PageTaskListComponent,
		PageEditTaskComponent,
		TaskListComponent,
		TaskFormComponent,
	],
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true }
		),
		BrowserModule,
		FormsModule,
	],
	providers: [NgForm, TaskService],
	bootstrap: [AppComponent]
})
export class AppModule { }
