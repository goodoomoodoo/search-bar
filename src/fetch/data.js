import 'whatwg-fetch';


// return Promise that contains JSON file
export const dataPromise = fetch( 'https://jsonplaceholder.typicode.com/users' )
  .then( res => {
      return res.json();
  })
