import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { DirectionsComponent } from './directions/directions.component';
import { SearchComponent } from './search/search.component';
import { GuidedToursComponent } from './guided-tours/guided-tours.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { BlogComponent } from './blog/blog.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    DirectionsComponent,
    SearchComponent,
    GuidedToursComponent,
    FeedbacksComponent,
    BlogComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
