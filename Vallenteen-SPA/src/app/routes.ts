import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DiscographyComponent } from './discography/discography.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'discography', component: DiscographyComponent},
    { path: 'news', component: GalleryComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
  ];
export default appRoutes;
