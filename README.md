*User Login Sample:
Username: KelsonPaulo
Password: CodingTesting123


I wanted to provide you with a brief technical overview of the approach 
I took in creating this app, i used Context API  implementing authentication and state management. 
Here's a concise breakdown of my decision and implementation:

-Simplicity and Lightweight Implementation: 
The primary motivation behind choosing Context API (useContext) 
over Redux was its simplicity and lightweight nature. 
In simpler projects, where the state management requirements aren't overly complex, 
Context API offers a more straightforward solution without the
 additional overhead that comes with Redux.

Authentication Management: I utilized Context API to handle authentication within the app.
By creating an AuthContext, I encapsulated the authentication
state and provided authentication-related functions such as login, 
logout, and checking authentication status.

In summary, by leveraging React's Context API along with useState hooks,
 I was able to implement a streamlined solution for authentication, 
 user data storage, and managing active tabs within our React Native app.
  This approach offers a balance between simplicity and functionality, 
  catering to the specific requirements of our project without introducing
   unnecessary complexity.