import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformLaunchComponent } from './pages/platform-launch/platform-launch.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'platform-launch',
    pathMatch: 'full'
  },
  {
    path: 'platform-launch',
    component: PlatformLaunchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
