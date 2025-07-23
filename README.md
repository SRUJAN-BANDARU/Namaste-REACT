# Namaste React


# Parcel
Why we use parcel??
 - Dev Build
 - Local Server
 - HMR - Hot Module Replacement
 - File Watching Algorithm - Written in c++
 - Caching - Faster Builds
 - Image Optimization
 - Minification
 - Bundling
 - Compressing
 - Consistent Hashing
 - Code Splitting
 - Differential Bundling (Supports older browsers)
 - Error Handling
 - HTTPs
 - Tree Shaking - remove unused code 

 Added browserslist in package.json file to tell all the supportive browsers

 While we are writing the code in React js (like React.createElement) it creates an object and then when it got renders it becomes the html element

 When we write the code in jsx it can be transpiled into react code using Babel and then into html


 Namaste food
 Component overview

    Header
     - Logo
     - Nav Items
    
    Body
     - Search
     - Restaurant container
        - Restaurant card
            - Img
            - Name of Res, Star Rating, Cuisine, delivery time
    
    Footer
     - Copyright
     - Links
     - Address
     - Contact


Don't keep hard coded data in components files
Use one separate folder


Types of exports:
• Default Exports :- We can write only one default export in a file
    Ex: export default Component;
    import Component from "path";

• Named Exports : When we need to export multiple things in a file(use export before function or const)
    Ex: export const Component;
    import {Component} from "path";


# React Hooks

 (Normal JS utility function)

- useState()
    when we change the state variable react can re-render the data
- useEffect()