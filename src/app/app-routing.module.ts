import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvComponent } from './pages/tv/tv.component';
import { BookmarkedComponent } from './pages/bookmarked/bookmarked.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'', canActivate:[authGuard], component:HomeComponent},
  {path:'movies',canActivate:[authGuard], component:MoviesComponent},
  {path:'tv',canActivate:[authGuard], component:TvComponent},
  {path:'bookmarked',canActivate:[authGuard], component:BookmarkedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
