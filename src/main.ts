import { Aurelia } from 'aurelia-framework';
import environment from './environment';
//import 'bootstrap';

import  openIdConfiguration  from './open-id-configuration';


export async function configure(aurelia: Aurelia)
{  
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  aurelia.use.plugin('aurelia-open-id-connect', () => openIdConfiguration);

  if (environment.debug)
  {
    aurelia.use.developmentLogging();
  }

  if (environment.testing)
  {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
