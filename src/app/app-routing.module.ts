import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [

  {
    path: 'main',
    loadChildren: () => import('./layout/main/main.module').then(m => m.MainModule)
  },

  {
    path: 'main',
    loadChildren: () => import('./layout/main/main.module').then(m => m.MainModule)
  },

  {
    path:'main',
    component: MainComponent,

    children: [
      {
        path: 'main',
        loadChildren: () => import('./layout/login/login.module').then(m => m.LoginModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
