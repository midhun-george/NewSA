import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxTextOverflowClampModule } from "ngx-text-overflow-clamp";
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxGalleryModule } from 'ngx-gallery';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatAutocompleteModule, MatToolbarModule, MatDialogModule, MatRadioModule, MatCardModule, MatInputModule, MatIconModule, MatSelectModule, MatMenuModule, MatTabsModule, MatChipsModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FiltersectionComponent } from './components/search/filtersection/filtersection.component';

import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchComponent } from './components/search/search.component';

import { PlayersService } from './services/players.service';
import { SearchService} from './search.service';

import { StringlengthPipe } from './pipes/stringlength.pipe';
import { SlickModule } from 'ngx-slick';
import { AboutComponent } from './components/about/about.component'
import { GalleryComponent } from './components/gallery/gallery.component';
import { MatchComponent } from './components/match/match.component';
import { LearningComponent } from './components/learning/learning.component';
import { LiveScoresComponent } from './components/live-scores/live-scores.component';


//import { HomeService } from './services/home.service';
const allRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent, data: { state: 'search' } },
  { path: 'about', component: AboutComponent, data: { state: 'about' } },
  { path: 'match', component: MatchComponent, data: { state: 'match' } },
  {
    path:'gal', component:GalleryComponent, data: { state: 'gal' }
  },
  { path: 'learn', component: LearningComponent, data: { state: 'learn' } },
  { path: 'live', component: LiveScoresComponent, data: { state: 'live' } },
  { path: '**', component: HomeComponent },
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    StringlengthPipe,
    FiltersectionComponent,
    AboutComponent,
    GalleryComponent,
    MatchComponent,
    LearningComponent,
    LiveScoresComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,MatAutocompleteModule,MatToolbarModule,MatTabsModule, MatDialogModule,MatRadioModule,MatCardModule,MatSelectModule,MatMenuModule,MatIconModule,MatInputModule,MatChipsModule,
    RouterModule.forRoot(allRoutes),
    FlexLayoutModule,
    SlickModule,
    NgxPaginationModule,
    NgxTextOverflowClampModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    NgxGalleryModule
  ],
 providers: [SearchService,PlayersService],
 
  bootstrap: [AppComponent],
  entryComponents: [
    FiltersectionComponent
  ]

})
export class AppModule { }
