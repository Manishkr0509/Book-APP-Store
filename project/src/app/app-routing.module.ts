import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';


const routes: Routes = [
  { path: "comment", component: CommentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
