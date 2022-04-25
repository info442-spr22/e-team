# Requirements
This document defines all requirements for the product. It will be used as a basis for creating development tasks and the development phase will be graded against completion of these requirements.<br>
<br>
Requirements labeled as **out of scope** are requirements developers would like to achieve but do not commit to. Non-functional requirements are set as a guide for designing properties of the web application. Considering the time given for the project, non-functional requirements are labeled as **out of scope**. Other requirements are considered as **core requirements** that developers commit to achieve.

## Login in/ sign up Page
1. Contains a Welcome phrase/sentences (“Sign in or create an account to secure your travel or report an incident to make night walking safter for the Dawg pack”) with logo on the center of the page.
1. Contains UW email & Password fields beneath the welcome phrase.
1. Contains “Sign In” button below the email/password fields.
1. Contains “Create an account” button below to the sign in button.
1. Contains “If you don’t already have an account, sign up here” phrase below the “Sign up” Button
1. If the user clicks on Sign up button, it leads to sign up page.
1. Sign up page includes fields that requires user’s first and last name, contact # / email.
1. Contains Sign up button at bottom of page.
   * After signing up, the user would be navigates to the profile building page. User is required to enter their user name (text entry). Profile picture and discription section is optional. 
   * If the user name section is not entered when hitting the submit button, a red error message would show up saying :”Please enter a valid user name”
   * If required information are all filled out, by clicking the submit button, the user would be navigated to the home page.
1. If the user hits sign up/log in button, it leads to the Home page.
1. **(Out of scope)** if the user typed the wrong id/password more than 3 times, show the “Forgot your ID/Password?” phrase with a link associated with it.
1. **(Out of scope)** the “Forgot your ID/Password” link leads to the user’s previously chosen way of contact. (Email, phone number, etc).

## User Profile Page
1. Contains the user’s user name, bio, and profile picture.
   * If the bio is not entered by the user, it would be blank
   * If the profile picture is not uploaded by the user, a default image (person icon in a circle) would show
   * If the user clicks the pencil icon on the top right corner of the profile box, the user would be able to enter to a text entry box to change its user name, user description and user profile. The user can click on the save button to save the changes made. The user name section cannot be empty. If empty, an error message of “must have valid user name” would be displayed in red.
1. Contains up to 3 latest incident report record by the user. Each incident report record includes the icon of the type of incident, type of incident, encounter date of incident, and also location of incident.
1. Contains a message related to the user’s contribution in incident report for the website
   * If the user has not made any incident report before, the message would display: “Make an incident report on the map to make the night walk safer for UW students!”
   *If the user has made incident report before, the message would display:“You had made #(number of incident reports submitted by user) incident reports in total. Thank you for making night walk safer for UW students”
1. Has a Return to Map Page button. Users can click on the button to navigate back to the home (map) page.



## Home (map) Page:
1. On the right side of the screen, there is a map shown zoomed into the University of Washington (the whole map covers an area of a four miles radius from the University of Washington), with the center as the user’s location
1. On the map, there are different colored map pin icons displaying different incident traffic such as violent incident, homeless people, or dim lights. Red pin icon refers to crime related reports, yellow pin icon refers to dim light report, purple refers to smell of drug report, green refers to yelling or loud noise report, pink refers to weird people report, and gray refers to the “other” reports (incident type that is not included in the above given choices)
1. If you click on a pin, it will show a short description of the type of incident that it is. The short description includes the incident type and incident report date.
1. On the left side of the page, there is a button labeled as ‘Report an Incident’ where the purpose of this button is for if the user notices an incident around them, they are able to report it.
1. Once clicking the ‘Report an Incident’ button, it will display a form asking for the Location of the Incident, Incident type (in the form of check box), datetime of encounter (in the form of drop down menu), and the description of the incident (in the form of text entry box). For this form, the location, incident type, and date of encounter is required entry.
   * When the user is finished filling out the form, they have two button options: to submit the form or to cancel the form.
   * Clicking the ‘cancel’ button will navigate the user back to the original home page with just the button with ‘Report an Incident’
   * Clicking the submit button will navigate the user to a ‘report submitted’ once submitted successfully and a button to navigate ‘Return to Home Page’
     * If the user did not properly fill out the first three form questions, they will not be able to continue on, and there will be text in red stating that they are missing information that they need to complete.( Error message: “Please select an incident type” / “Please select date of encounter” / “Please enter a valid location”)

## Non-functional requirement (out of scope)
1. Performance
   * Time to first contentful paint on initial homepage load must be less than 1 second on mobile
   * Time to first first contentful paint on initial homepage load must be less than 3 seconds over LTE connection
   * Time to load a new incident report on the map after it’s successfully submitted must be less than 5 seconds
   * Time to load the pin on the map after the user input valid location information must be less than 1 second
   * Time to first contentful paint on initial user profile must be less than 1 second
1. Security
   * Users shall not be able to access the report history or real-time geo-location information of other users unless they have the role of “site admin”
   * New user accounts will require email validation before becoming active
   * The application will protect user data in compliance with [EU’s General Data Protection Regulations (GDPR)](https://gdpr.eu/)
1. Reliability
   * The service must be available to the users 98% of the time
   * System must return available to the users within 3 hours after failure
1. Usability
   * All text on the site will have acceptable contrast ratios, as tested by [WebAIM’s Contrast Checker](https://accessibe.com/ace?gclid=CjwKCAjw9e6SBhB2EiwA5myr9pbaLVNhkXinSARdLHDzLw6ixCLWO3s4oCVc0YrcOjZi5sRoM0XmwhoCHMwQAvD_BwE)
   * The palette used for different icons must be colorblind-friendly
   * The application will be navigable and usable via screen readers
   * The error rate of users submitting an incident report mustn’t exceed 15%
