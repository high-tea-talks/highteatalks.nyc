export default undefined;

// const fs = require('fs');

// const pages = [
//   {
//     component: 'Home',
//     route: '/',
//   },
//   {
//     component: 'Test',
//     route: '/test',
//   },
// ];

// pages.map(({ component, route }) => {
//   const pageSrc = `export { ${component} as default } from '../src/pages/${component}';`;
//   route = route === '/' ? 'index' : route;
//   fs.writeFile(`./pages/${route}.tsx`, pageSrc, error);
// });

// function error(error) {
//   if (error) throw error;
// }
