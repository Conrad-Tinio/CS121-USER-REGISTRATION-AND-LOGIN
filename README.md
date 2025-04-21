# CMSC 121 - USER REGISTRATION AND LOGIN

### TASK:
* Create a basic website that allows users to sign up and log in using a simple database system.

### HOW TO RUN THE PROGRAM:
* Clone the Github Repository to your local computer
* Create a virtual environment (to ensure safe practices on Django): on CMD, run python -m venv venv
* Activate your virtual environment: on CMD, venv\Scripts\activate
* Install requirements for this app to run: on CMD, pip install -r requirements.txt
* Run your backend server:
  - cd backend
  - python manage.py runserver
* On a new terminal, run your frontend server:
  - cd frontend
  - npm install (install React dependencies first)
  - After installation -> npm start
 
### FEATURES:
* Login Page (only works when a user is registered in the database):
  - Asks the user for their:
      - Email address
      - Password
* Register Page:
  - Asks the user for their:
    - First name
    - Last name
    - Birthday
    - Email
    - Username (for database puropses)
    - Password
    - Password Confirmation (for password verification)
* Dashboard:
  - Once a user has logged in, the Dashboard greets them with a welcome message with their name (first name and last name)
  - A logout button can also be seen which allows the user to sign out of their accounts
* Navigation Bar: (upper left corner or the button at the top when tab is resized to smaller size)
  - If a user is not yet logged in, this shows: Login and Register
  - If a user is logged in, this shows: Dashboard and Logout

### TECH STACK:
* Django, React

### DEVELOPER:
* Tinio, Louis Conrad Andrei S. 
