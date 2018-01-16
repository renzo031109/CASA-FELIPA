// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC8Nbto6xPbWQl2476xHcO4z2trHnB1J48',
    authDomain: 'casa-felipa.firebaseapp.com',
    databaseURL: 'https://casa-felipa.firebaseio.com',
    projectId: 'casa-felipa',
    storageBucket: 'casa-felipa.appspot.com',
    messagingSenderId: '141127620208'
  }
};
