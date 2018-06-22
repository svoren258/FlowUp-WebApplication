import { NgModule } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WidgetComponent } from './components/content/widget/widget.component';
import { StickerComponent } from './components/content/widget/sticker/sticker.component';
import { OptionsComponent } from './components/menubar/options/options.component';
import { RouterModule, Routes} from '@angular/router';
import { InboxComponent } from './components/content/inbox/inbox.component';
import { DashboardComponent } from './components/content/dashboard/dashboard.component';
import { TasksComponent} from './components/content/tasks/tasks.component';
import { TimesheetComponent } from './components/content/timesheet/timesheet.component';
import { ProjectsComponent } from './components/content/projects/projects.component';
import { TeamComponent } from './components/content/team/team.component';
import { ConversationComponent } from './components/content/dashboard/conversation/conversation.component';
import { ReportComponent } from './components/content/dashboard/report/report.component';
import { WidgetformComponent } from './components/widgetform/widgetform.component';
import { SettingsComponent } from './components/content/dashboard/settings/settings.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppStateModel } from './models/app-state.model';
import { widgetReducer } from './store/reducers/widgets.reducer';

import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { StickerformComponent } from './components/stickerform/stickerform.component';

const environment = {
  development: true,
  production: false,
};

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard/projects', pathMatch: 'full'},
  { path: 'dashboard/projects', component: DashboardComponent },
  { path: 'dashboard/timesheet', component: TimesheetComponent },
  { path: 'dashboard/team', component: TeamComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'dashboard/conversation', component: ConversationComponent },
  { path: 'dashboard/report', component: ReportComponent },
  { path: 'dashboard/settings', component: SettingsComponent },
];

const reducers: ActionReducerMap<AppStateModel> = {
  widgets: widgetReducer,
};

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ToolbarComponent,
    WidgetComponent,
    StickerComponent,
    OptionsComponent,
    InboxComponent,
    TasksComponent,
    DashboardComponent,
    TimesheetComponent,
    ProjectsComponent,
    TeamComponent,
    ConversationComponent,
    ReportComponent,
    SettingsComponent,
    ConversationComponent,
    ReportComponent,
    SettingsComponent,
    WidgetformComponent,
    ModalComponent,
    StickerformComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers),
    environment.development ? StoreDevtoolsModule.instrument() : [],
    // StoreModule.forRoot(reducers, {metaReducer}),
    // EffectsModule.forRoot([]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
