import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


 
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/details' },
  { path: 'details', loadChildren: () => import('./pages/details/details.modules').then(n => n.DetailsModule) },

  { path: '', pathMatch: 'full', redirectTo: '/resumer' },
  { path: 'resumer', loadChildren: () => import('./pages/resumer/resumer.modules').then(n => n.ResumerModule) },

  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },

  { path: '', pathMatch: 'full', redirectTo: '/langues' },
  { path: 'langues', loadChildren: () => import('./pages/langues/langues.modules').then(m => m.LanguesModule) },

  { path: '', pathMatch: 'full', redirectTo: '/cursus' },
  { path: 'cursus', loadChildren: () => import('./pages/cursus/cursus.modules').then(m => m.CursusModule) },

  { path: '', pathMatch: 'full', redirectTo: '/experiences' },
  { path: 'experiences', loadChildren: () => import('./pages/experiences/experiences.modules').then(m => m.ExperiencesModule) },

  { path: '', pathMatch: 'full', redirectTo: '/competences' },
  { path: 'competences', loadChildren: () => import('./pages/competences/competences.modules').then(m => m.CompetencesModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
