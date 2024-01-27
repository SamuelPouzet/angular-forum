import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {HomeComponent} from "./home/home.component";
import {TopicsComponent} from "./topics/topics.component";

const routes: Routes = [
  // { path: '',   redirectTo: '/', pathMatch: 'full' },
  {path: '', component: HomeComponent},
  {path: 'topics/:id', component: TopicsComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
