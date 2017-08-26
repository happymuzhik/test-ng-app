import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import PageTaskListComponent from '../pages/page-task-list/page-task-list';

const appRoutes: Routes = [
	{ path: 'tasks', component: PageTaskListComponent },
	{ path: '',   redirectTo: '/tasks', pathMatch: 'full' },
	// { path: '**', component: PageTaskListComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		PageTaskListComponent
	],
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true }
		),
		BrowserModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
