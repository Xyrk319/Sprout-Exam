# Sprout-Exam

This is a technical exam as part of the recruitment process of Sprout Solutions. 


The backend is on a separate repository which is built using FastApi: [Backend Repository](https://github.com/Xyrk319/Sprout-Exam-BE)

Additionally, the application is currently hosted which you can access through this [Link](https://sprout-exam.onrender.com/)
## Local Environment


```
Steps in Running the program
1. npm i
2. npm run dev

Note: The app require an .env file to run

Set the following variables in your own .env

VITE_BACKEND_URL=http://localhost:8000
VITE_APP_NAME="sprout_exam"

```
## Notes

1. The consideration on adding new employee types is quite a difficult approach since it would require additional tables in the database. Too much joining is more prone to bug especially to dynamically get the correct table for the relationship. Hence, employee type is an enum here.
2. User and Employee are of different entities, there is only one user account seeded which has the following credentials
```
email: admin@admin.com
password: admin
```
## Answer to Question

If we are going to deploy this on production, what do you think is the next
improvement that you will prioritize next? This can be a feature, a tech debt, or
an architectural design.

1. Reflect backend validations in frontend
2. Fix issues with routings since there are instances of Not Found on deployed site
3. Add confirmation dialogs
4. Create json resource serializers instead of using Pydantic schemas
5. Validation adjustment for catching the employee type
6. Create a users page


## Tech

npm 8.5.5
node v16.15.1
