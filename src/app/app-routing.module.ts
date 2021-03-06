import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/onboarding',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'mobile-number',
    loadChildren: () => import('./@auth/registration/mobile-number/mobile-number.module').then( m => m.MobileNumberPageModule)
  },
  {
    path: 'otp-verification',
    loadChildren: () => import('./@auth/registration/otp-verification/otp-verification.module').then( m => m.OtpVerificationPageModule)
  },
  {
    path: 'registration-form',
    loadChildren: () => import('./@auth/registration/registration-form/registration-form.module').then( m => m.RegistrationFormPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
