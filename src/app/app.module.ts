import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {LandingZoneComponent} from './landing-zone/landing-zone.component';
import {CategoryComponent} from './category/category.component';
import {TopicComponent} from './topic/topic.component';
import {NgOptimizedImage} from "@angular/common";
import {TopicsComponent} from './topics/topics.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { PostsUserComponent } from './posts-user/posts-user.component';
import { PostsContentComponent } from './posts-content/posts-content.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    LandingZoneComponent,
    CategoryComponent,
    TopicComponent,
    TopicsComponent,
    LoginComponent,
    PostComponent,
    PostsComponent,
    PostsUserComponent,
    PostsContentComponent,
    SectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
