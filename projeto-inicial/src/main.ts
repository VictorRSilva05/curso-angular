import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {Comp2} from './app/comp2/comp2';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(Comp2)
  .catch((err) => console.error(err));