import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MaterialLoaderModule } from './material-loader/material-loader.module';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectComponent } from './projects/project/project.component';
import { MilestoneListComponent } from './milestones/milestone-list/milestone-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    ProjectListComponent,
    ProjectComponent,
    MilestoneListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialLoaderModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
