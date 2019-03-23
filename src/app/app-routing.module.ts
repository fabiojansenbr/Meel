import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },

  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginPageModule',
  },

  {
    path: 'tabs', 
    // canActivate: [AuthGuard],
    loadChildren: './tabs/tabs.module#TabsPageModule'
    // loadChildren: './tabs/tabs.router.module#TabsPageRoutingModule'  
  },

  { 
    path: 'chatroom', 
    loadChildren: './chatroom/chatroom.module#ChatroomPageModule' 
  },
  { path: 'invitation', loadChildren: './subpages/invitation/invitation.module#InvitationPageModule' },

  // { 
  //   path: 'recommendation', 
  //   loadChildren: './subpages/recommendation/recommendation.module#RecommendationPageModule' 
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


