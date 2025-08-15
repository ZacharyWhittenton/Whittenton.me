import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },

  // Lazy-loaded feature areas
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'blog', loadChildren: () => import('./features/blog/blog.module').then(m => m.BlogModule) },
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) },
  { path: 'scheduler', loadChildren: () => import('./features/scheduler/scheduler.module').then(m => m.SchedulerModule) },

  // Fallback
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',      // good for SSR and consistent boot
      scrollPositionRestoration: 'enabled',      // restores scroll on back/forward
      anchorScrolling: 'enabled',                // supports #fragment links
      paramsInheritanceStrategy: 'always',       // inherit route params to children
      onSameUrlNavigation: 'reload',             // allow reload on same URL if needed
      preloadingStrategy: PreloadAllModules      // speed up lazy modules after load
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
