// export const baseURL = 'https://alaatv.com/api/v2'
axios: {
    // Do away with the baseUrl when using proxy
     proxy: true
   },
 
   proxy: {
     // Simple proxy
     "/api/": {
       target: "https://test.com/",
       pathRewrite: { "^/api/": "" }
     }
   }