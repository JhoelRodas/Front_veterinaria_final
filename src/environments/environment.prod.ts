// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

// export const environment = {
//   production: true,
//  backend: 'https://backend-veterinaria-final.onrender.com', // Put your backend here
//   apiLogin: '/auth/signin',
// };
export const environment = {
  production: true,
  // backend: 'http://localhost:8081', // Put your backend here
  //backend: 'https://ab89-158-172-227-0.ngrok-free.app', // Put your backend here
  backend: 'https://backend-veterinaria-final.onrender.com', 
  apiLogin: '/auth/signin',
};