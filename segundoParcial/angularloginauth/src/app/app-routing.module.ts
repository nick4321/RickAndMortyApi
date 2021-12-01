import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ImagedetailsComponent } from './components/imagedetails/imagedetails.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: "episode",
    component: EpisodiosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "personajes",
    component: PersonajesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'galeria', //localhost:4200/admin
    component: ImageGalleryComponent,
    canActivate: [AuthGuard]
    
  },
  {
    path: 'image/:id', //localhost:4200/image/${id}
    component: ImagedetailsComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
