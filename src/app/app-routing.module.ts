import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from '../app/components/search/search.component';
import {UploadComponent} from '../app/components/upload/upload.component';
import { UsermanualComponent } from './components/usermanual/usermanual.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  {
    path: 'upload', component: UploadComponent
  },
  {
    path: 'docs', component: UsermanualComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
