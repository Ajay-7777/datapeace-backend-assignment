Backend Developer Assignment Solution for Data Peace AI Technology Private Limited

Setting Environment
download node.js app
use command in terminal, npm init
use comman in terminal ,npm i nodemon 
Download Postman app for checking the API's . Link for the app (https://www.getpostman.com/downloads/)
Setting Project

After Environment Setup
create app.js file
run command npm i express body-parser mongoose
 create  DATABASE folder, mongodb.js file and Schema.js
Ensure that all these files must have at same level directory

Run app.js file it will start your server the output must be like ( * server is running on  http://localhost:3000/api/users (Press CTRL+C to quit)) and few lines more
Copy the link and paste in the postman app
Check For endpoints
Endpoints

 http://localhost:3000/api/users And Method Must be GET It gives you the details of the users that already exists in database
server is http://localhost:3000/api/usersusers/{id} And Method Must be GET It gives you the detail of the user with id={id} (example : if id= 15 then API will be http://localhost:3000/api/users/10)

http://localhost:3000/api/users/{id} And Method Must be POST It creates a user with Id given and data given by postman app

Example: if you have to add a user with id =601 ( http://localhost:3000/api/users/601 and json payload is raw in postman app) For posting data in database you have to setup postman app 


http://localhost:3000/api/users/{id} And Method must be PUT It updates the user data of the specific id given Example http://127.0.0.1:5000/users/601 For Updating data in database you have to setup postman app

http://localhost/api/users/{id} And Method Must be DELETE It deletes data from the database fro a specific id given by user Example : http://localhost/api/users/601 It deletes the data of id=601 from database