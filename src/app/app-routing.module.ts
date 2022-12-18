import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'presentation',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'contactez',
    loadChildren: () => import('./folder/contactez/contactez.module').then( m => m.ContactezPageModule)
  },

  { 
    path: 'home',
    loadChildren: './folder/home/home.module#HomePageModule'
  },
  {
    path: 'presentation',
    loadChildren: () => import('./presentation/presentation.module').then( m => m.PresentationPageModule)
  },
  {
    path: 'propos',
    loadChildren: () => import('./folder/propos/propos.module').then( m => m.ProposPageModule)
  },
  
   {
    path: 'points',
    loadChildren: () => import('./folder/points/points.module').then( m => m.PointsPageModule)
  },

  {
    path: 'contacts',
    loadChildren: () => import('./folder/contacts/contacts.module').then( m => m.ContactsPageModule)
  },

  {
    path: 'services',
    loadChildren: () => import('./folder//services/services.module').then( m => m.ServicesPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
