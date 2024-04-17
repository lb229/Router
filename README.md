exercise-3
Add a new Route to the users/:username path that renders a ShowGithubUser component that receives the username as a path parameter and renders the GithubUser component 
from the first Data Fetching with fetch and useEffect exercise by passing it the received username.

exercise-4
Add three Links within the main App component and use them to navigate to all three routes.

exercise-5
Add a Not Found route that renders when a user navigates to a path that does not exist.

exercise-6
Create a GithubUserList component that fetching this API url, https://api.github.com/users, show a list of links of github usernames.
By clicking on a username, the ShowGithubUser component will be displayed. Add a Route to the users path that shows the GithubUserList component. 
In doing so, remove the /users/:username route from the App component, and add a new nested route within the /users route.

exercise-7
Add an index route to the GithubUserList route that shows the "Add a user and select it" message.
