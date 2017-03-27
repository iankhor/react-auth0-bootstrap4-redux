This boilerplate was bootstrapped with:   
* [create-react-app](https://github.com/facebookincubator/create-react-app) 
* [Reactstrap (Bootstrap 4)](https://github.com/reactstrap/reactstrap)  
* [react-router v4.0.0-beta.7](https://github.com/ReactTraining/react-router/releases)

An example of the boilerplate can be seen here at : [https://react-auth0-bootstrap4.herokuapp.com/](https://react-auth0-bootstrap4.herokuapp.com/)

![Example](https://github.com/iankhor/files/blob/master/react-auth0-bootstrap/1.%20react-auth0-bootstrap.gif)

### Instructions
1. Git clone repository into your local directory
2. Run ```npm i``` in your local directory
3. Run ```cp .env.example .env```
4. Populate your Auth0 `client id` and `domain` in the `.env` file  
5. Start React App with ```npm run watch```   
6. Open React App at ```localhost:9000```    
7. Ensure you have a login and password with [Auth0](https://www.auth0.com) associated with your `client id` in Step 4.
8. Ensure you have set `http://localhost:9000/` and `http://localhost:9000/auth` as an `Allowed Callbacks URLs` within Auth0  

For more info, check out the `Auth0 setup` section of my publication here : [https://goo.gl/ga46Em](https://goo.gl/ga46Em)

### Notes
1. Update any environment variables where applicable in your local ```.env``` file
2. Update CSS in the style.styl file
3. Any changes in the code and ```.styl``` files will automatically recompile the projects
4. Update routes in the component called ```Routes``` in ```\src\Routes.js```
5. The component ```JSONDebugger``` can be used to display JSON data by passing the component a JSON file with the prop name ```json```.