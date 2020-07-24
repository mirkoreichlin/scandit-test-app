import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScanditSdkModule} from 'scandit-sdk-angular';
import {ScannerComponent} from './scanner.component';

const LICENSE_KEY = 'AVZOZQU9GhkhLUEhrQ7SdiIJ0uLtD41dCHEXbfFaK+8Ea4T0VHL6cYphKkD7XyQOfmxaQ6ZxN17dS8RKqmS7VDMJEd3lM+ed6lmmvVVbJqF5VEYLGkDnGxowpWBhICgCaQLpnpcAZ16lK9UlQeVktF83FkyFFDsOGqtY9kzGlu5vOemhA0nTnYwU1C86dtFcguYYJxWH2q8vNPCk89lt5IbTTDvzzLxs3QSuRLI/JwhaczHvfaR8okUOc0WtVQ50+u0eJESyFRYM/xXbq0xCEb2lmkG1/X3d7tOm+32wZp0YQvgZumSnrTqJNy/AwG0RKRQi2zgl04b3YpO2fB2JgMEh9s5K8H+yeUnbKpmqb9oX5J1mauX8AY/Uk3Qw/LkjlMUjJVjPXv/QBbqEUZmutRIe0UCXTydXtlOJtcD2E8w7ob0y2IORNfiRNvfJE1wTuxAUft4OjXSS+EMFYzBS00d2f2VnqYMYH+0UvmPloC7CrB0bdWPC4usFKW/Ch4q3EIivBYYQGF60Ha3dQ+eaKkLt93YyjWffgpRnnBwrrANQiW9w2nrYhJboHURgoU2WjIUv3gNjd3KAERHHWZzPggMtR+MJI8RWg/P/ntOYob/WYPqS45aec1hdn2vxIkmlJFCIG/TNU0nWm5XQ0G0w6LmO0mbhxJPKTwLlVcIaAxDP8up09fPjQqD1H97nM+UzSu3MIm8iMcCt9QqMTEY2ZaDcQZIZz7iMWX68/8cmgQuu13ml/OxF9rHBuIXUom6MR4XflLtzOikQGgrcup9DTyTZ22MgkXLAGgmXrdfTY9vPj6W/9lCE0qnmTko=';
const ENGINE_LOCATION = '/assets/scandit/';

@NgModule({
  declarations: [
    ScannerComponent
  ],
  imports: [
    CommonModule,
    ScanditSdkModule.forRoot(LICENSE_KEY, {
      engineLocation: ENGINE_LOCATION,
      preloadEngine: true,
      preloadBlurryRecognition: true
    }),
  ],
  exports: [
    ScannerComponent
  ]
})
export class ScannerModule { }
