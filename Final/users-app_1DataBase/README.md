# Resource need to install

npm install -g nodemon
npm install --save express
npm install --save mongoose
npm install --save  body-parser
npm install --save  morgan (option but convenient)

## Steps

Inside of the angular folder (main), create new folder <dir>
Move all files (include .gitignore) to the new folder <dir>
Inside the main folder: npm init -> npm install --save express -> npm install --save mongoose -> npm install --save  body-parser -> npm install --save  morgan -> create new file: server.js
Inside the folder <dir>: ng build -w (it will create a dist folder)
Inside the main folder: nodemon server.js (It will run program in port 1337)

## Configuration in the server.js

## Run the program

cd /
mongod --dbpath  ../data
nodemon server.js
localhost:1337
