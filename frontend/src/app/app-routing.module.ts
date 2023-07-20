import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { Router, RoutesRecognized } from '@angular/router'; // Importando Router e RoutesRecognized

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'cadastro', component: CadastroComponent },
      { path: 'home', component: HomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        if (event.url === '/') {
          router.navigateByUrl('/login');
        }
      }
    });
  }
}
