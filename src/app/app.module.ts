import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environment/environment';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { TrendingItemComponent } from './components/trending-item/trending-item.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvComponent } from './pages/tv/tv.component';
import { BookmarkedComponent } from './pages/bookmarked/bookmarked.component';
import { MoviesSvgComponent } from './components/svg/movies-svg/movies-svg.component';
import { HomeSvgComponent } from './components/svg/home-svg/home-svg.component';
import { TvSvgComponent } from './components/svg/tv-svg/tv-svg.component';
import { BookmarkedSvgComponent } from './components/svg/bookmarked-svg/bookmarked-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    HomeComponent,
    TrendingItemComponent,
    FilmItemComponent,
    MoviesComponent,
    TvComponent,
    BookmarkedComponent,
    MoviesSvgComponent,
    HomeSvgComponent,
    TvSvgComponent,
    BookmarkedSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
