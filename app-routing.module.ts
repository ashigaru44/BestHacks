import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AchievmentsComponent } from './pages/achievments/achievments.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserProfileComponent } from "./pages/user-profile/user-profile.component"


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'user-profile', redirectTo: 'home',
  },
  {
    path: 'achievements', component: AchievmentsComponent,
  },
  {
    path: 'login', component: LoginPageComponent,
  },
  {
    path: 'register', component: RegisterPageComponent,
  },
  {
    path: 'my_profile', component: UserProfileComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
