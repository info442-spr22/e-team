# E-Safety Project Specification

## Team Members
Alan: PM <br>
Xiao Xiao: UX/UI <br>
Stephanie: Developer <br>
Jacqueline: Developer <br>
Yuemin: Developer

## Mission Statement
> Our mission is to ease the worries of safety with students at the University of Washington. With worries of increased unusual night time activity in Seattle, it is important for us to find a way to use technology to provide a platform to help students in easing their college experience.

## Problem Statements
  As students at the University of Washington start to live off campus due to the pandemic and limited dorm capacity, safety with students walking home at night becomes a crucial issue.
Many off-campus UW students have little access to resources that can help them secure a route home that shows no threat to their safety, especially during night time. Furthermore, current existing apps focus more on students who live on campus and only pinpoint sites regarding previous crime incidents but do not consider alternative factors that students concern when it comes to choosing a safer route. To investigate further on such topics and learn about our target audience’s struggles, we conducted a survey among university students currently living in the U-District area. Xiao Xiao: UX/UI <br>

  As the survey shows, 95% of our respondents have experience living off-campus (see Fig.1). Out of these students, about 79% walk home alone (see Fig.2) on a regular basis (3-5 days out of a week and above). It shows that these students largely feel unsafe walking home alone during night time compared to daytime (see Fig.3 & 4), which also supports our assumption that people feel more threatened while walking home at night time. According to the qualitative data we collected through the survey, there are four major conclusions: 1) safety threats of walking home alone are likely to affect a student's class/study schedule 2) students prefer walking home with other people than alone, along with being able to access and share specific information of their walk and the chosen route 3) although past crime incident is still the primary factor of choosing a route, students also concern information regarding other non-crime-related factors that are not universally accessible to them 4) few students have used any technology to facilitate their safety even though they feel threatened by walking home alone on certain occasions.

## Solution
  We envision a web map application that helps UW students identify possible dangerous routes and sites ahead of any potential crimes or factors that people may want to avoid. The data used for these sites comes from user reports and also official announcements like UW Alerts. A secure travel feature would also be included for students to schedule secured walks. According to the departure time and the estimated transportation time，if the user does not log in the website and click arrive with the time frame, an alert would be sent to the user’s entered emergency contact.

- Landing Page: <br>
<img src="img/Landing Screen.png" alt="Landing screen">
This is the landing screen of our website. Our website contains two main features: secured ride and incident report. Users can also enter their location and their desired destination to simply search for the desired route. <br>
<br>
  <img src="img/Route search 4.png" alt="Route4 screen">
If time of departure is not entered, the map would only show locations of reported incidences near possible routes for the user.
<br><br>

- Secure ride: <br>
<img src="img/Navigation.png" alt="Site navigation screen">
<br><br>
<img src="img/Route search 2.png" alt="Route search 2 screen">
If the user entered a start location, a destination, and also selected an departure time from the drop down menu, the secure ride feature would be activated. The user can click on the “Send Travel Info '' button to secure the travel.
<br> <br>
<img src="img/Route search 3.png" alt="Route search 3 screen">
A success message would appear to indicate the activation of the secure travel.
The user can click on the blue underlined “Cancel Travel” to link to the user profile page to cancel the travel.The user can also click on the “Return Home Page” button to return to the landing page.
<br> <br>
<img src="img/Profile Building 3.png" alt="Profile Building 3 screen">
When the user arrives their destination, they can click on the “My Profile” button on the top right corner of the top navigation bar to enter their profile page and click on the “Arrived” button (alert would not be sent to emergency contact). The user can also click on the “Cancel” button to cancel scheduled travel (alert would not be sent to emergency contact).
<br> <br>
<img src="img/Profile Building 4.png" alt="Profile Building 4 screen">
This is the profile page when the “Arrived” or “Cancel” button is clicked or when there is no scheduled travel. The user can click on the “Schedule a travel” button to return to the landing page.
<br><br>

- Report Incident: <br>
<img src="img/Report incident flow.png" alt="Report incident flow screen">
<br> <br>
<img src="img/Report incident 1.png" alt="Report incident 1 screen">
If the user clicked the “Report an Incident '' button on the landing page, the user would be directed to this page.The user can enter a location to notice other users place to avoid when choosing a route.The user would click to select one or more incident type. The user would also click the drop down menu to select the encounter time of the incident. The description column is optional.The user can then click on the “Submit” button to report the incident or click on the “Cancel”button to return to landing page.
<br> <br>
<img src="img/Report incident 1 Error.png" alt="Report incident 1 Error screen">
If the user did not select an incident type or time of encounter when clicking the submit button, an error message would appear in red to notify the user to make a selection. The user can make a valid selection and report by clicking “submit” or click “Cancel” to return to the landing page.
<br> <br>
<img src="img/Report incident 2.png" alt="Report incident 2 screen">
If the user made all required selections and hit the submit button, a success message would appear to notify the user that their report has been submitted and stored. The incident they reported would also appear on the map (and visible for other users of the website). The user can click on the “Return Home Page” button to return to the landing page.
<br> <br>
- Login/sign up & user profile setting up: <br>
<img src="img/Setting up.png" alt="Profile Setting up screen">
<br><br>
<img src="img/Profile Building 1.png" alt="Profile Building 1 screen">
The user can sign in with their UW email address if they already have an account or click the “create an account” to jump to account setup.
<br><br>
<img src="img/Profile Building 2.png" alt="Profile Building 2 screen">
The user will enter their information accordingly. The columns with a red * sign next to it are required entries.
<br><br>
<img src="img/Profile Building 2 Error.png" alt="Profile Building 2 Error screen">
If the user did not enter valid entries for the required columns, red error messages would appear.
<br><br>
- If have time in the future: <br>
<img src="img/Buddy Search 1.png" alt="Buddy Search 1 screen">
<br><br>
<img src="img/Buddy search 2.png" alt="Buddy Search 2 screen">
<br><br>

## Appendix A
Link to Figma: https://www.figma.com/file/vitnbWVl9aHfcTMyZR4mRC/INFO-442?node-id=0%3A1