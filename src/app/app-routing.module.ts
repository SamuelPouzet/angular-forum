import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {HomeComponent} from "./home/home.component";
import {TopicsComponent} from "./topics/topics.component";
import {LoginComponent} from "./login/login.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  // { path: '',   redirectTo: '/', pathMatch: 'full' },
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'topics/:id', component: TopicsComponent},
  {path: 'posts/:id', component: PostsComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
