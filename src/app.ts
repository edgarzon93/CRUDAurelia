
import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
  router: Router

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Car';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('./screen/home/home'), name: 'Home'},
      //{ route: 'edit', moduleId: PLATFORM.moduleName('./screen/form/edit'), name: 'edit'}
    ])

    this.router = router;

  }
}
