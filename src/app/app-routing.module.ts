import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AchievmentsComponent } from './pages/achievments/achievments.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]
  },
  {
    path: 'achievements', component: AchievmentsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginPageComponent,
  },
  {
    path: 'register', component: RegisterPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
