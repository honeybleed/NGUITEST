/**
 * Created by honeybleed on 2017/5/5.
 */
export default {
  entry: 'lib/index.js',
  dest: 'lib/bundles/ui.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.ui',
  globals: {
    '@angular/core': 'ng.core',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable'
  }

}
