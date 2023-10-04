# Typeahead component


## Questions

1. If you had control of the web-server, what are some ways you might implement a caching solution?

- 
2. How might you implement offline caching for your typeahead component?

- 
3. When using traditional session cookies, what are the primary security concerns and
mitigation techniques you might use?

- 

4. What are some advantages and disadvantages to using JWT for authorization and authentication in a web application?

- 
5. What are all the ways you can think of to write BAD React code?

- Main problem in most of the applications is state management. Due to this a lot of applications fall into the problem of prop drilling and passing props across multiple levels. That can be fixed by implementing a global state management solution such as Redux, Zustand, etc. 

- In terms of general bad code, most of the applications ignore the general code cleaniness. This can also be fixed by introducing ESLint and Prettier.


6. What new Web or React APIs are you most excited about?

- React Server Components. This will completely change the server side rendering technologies as it will be handled out of the box. Server side rendering is currently used for directly delivering .html to the browser and without server side rendering React is actually sending out a empty html and after some time it fetches the JS bundle of the app. Due to this, clients usually see a white screen for a couple of seconds before the application loads. This also affects the Google Lighthouse score which directly changes the SEO and a search position for the search engines.