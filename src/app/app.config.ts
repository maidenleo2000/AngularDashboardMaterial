import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(
        {
          skipInitialTransition: true,
          onViewTransitionCreated(transitionInfo){
            console.log({transitionInfo})
          }
        }
      ),

      ),
    //Con el importProvidersFrom se importan los modulos que quiero que sean GLOBALES en toda la aplicación como el HttpClientModule
    //? YA NO SE USA HttpClientModule, en su lugar ahora en Angular18 es withInterceptorsFromDi()
    // importProvidersFrom(
    //   HttpClientModule,
    // )
    provideHttpClient(withInterceptorsFromDi()), provideAnimationsAsync()
  ]
};
