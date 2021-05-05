# README

This is an image repository for the shopify fall 2021 internship challenge.

This is built using rails and react. 

To start up the application, simple run `rails -s 127.0.0.1:3000` in the terminal. The application will be available at the address '127.0.0.1:3000'.

The user will be brought to a main page where they will be able to view any images that they have uploaded. The user can then go to the uploads to upload one or many images. These images are then available to be viewed on the main page. The user can also choose to download or delete any images they have previously uploaded.

The app utilizes the built in active storage feature of rails to store the images. It uses React for effective client side rendering. The necessary infrastructure for the addition of multiple users is already in place. Authentication is commented out in the client but is currently setup to supply a primitive email and password system to authenticate.

Bootstrap is used for fast, and effective styling of components. Routing is done client side since this was the easier given that everything was already using React. 


### Endpoints
The main endpoints used in the application are:
- '/'
  - GET
    - the root endpoint used to serve the page
- '/images/:userId'
  - GET
    - used to get all the image ids for a user
  - POST
    - used to post an image from the user to the server
  - DELETE
    - used to delete an image from the database
- '/images/url/:imageId'
  - GET
    - used to get a singular image from the server


### Tests
Tests have been written for the main image controller for the application.
To run the test, simple go into the root directory of the project and run `ruby test/controllers/images_controller_test.rb`
