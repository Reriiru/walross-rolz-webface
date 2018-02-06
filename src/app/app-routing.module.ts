import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommandsComponent } from './commands/commands.component';
import { SettingsComponent } from './settings/settings.component';
import { NoteComponent } from './note/note.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'commands',
    component: CommandsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'note',
    component: NoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
