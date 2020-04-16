# parking-manager
Rutgers Software Engineering Project Spring 2020


Manager Subgroup

Manager Introduction: Welcome to the Manager side of our Smart Park app! The Manager subgroup is tasked with automating and reducing the work that is required to successfully run a parking garage business. As a Manager, it is extremely crucial that the administrative staff is clear and continually updated on the state of their parking garage spots while also providing an easy and pleasant experience for our customers. This is our goal: to improve the organization and efficiency a thriving business needs while also appealing to the needs of the customers by implementing new ideas and solutions. The features we have implemented that will directly benefit anyone using our app to manage a parking garage is our statistics page, the reservation page, price page, login page, calendar page, and the view garage page. 


Manager/src/App.js
	App.js is the file that contains all of our routing that will allow managers to access the various features that can be used on each page. These pages are the calendar. statistics, overview, registration, pricing, and edit layout pages which can all be accessed from our home page. 

Manager/src/Calendar.js
	The calendar.js file is responsible for the front end code that will allow a manager to see local events near his parking garage and add those into a system if he would like to advertise his parking for that event and offer discounts for parking at those events as well. 

Manager/src/Home.js
	Home.js is the home page that  welcomes a manager as soon as he or she logs in. From this page we can access all other pages that managers need to access to utilize any or all features of the SmartPark product. 

Manager/src/ParkingsSpot.js
	This file is responsible for transferring the details of each parking spot through the backend so that managers can view information about the status of individual parking spots through a front end rendering of their garage. 

Manager/src/Reservations.js
	This file will do some backend work to get the status of each parking spot and then returns a front end where managers can search for a customer and view their current status within the system. 

Manager/src/Statistics.js
	Retrieves backend information and formats into graphs using the react bootstrap front end so that managers can see useful business analytics to view any trends that are either beneficial or detrimental and based on the information the manager can make necessary changes as he or she sees fit. 

Manager/src/GarageGeerator.js 
	This file will be the front end where a manager can see the whole garage and view the information associated with each individual spot. This page will display information like reservation status, customer name, payment status etc. 
  
Manager/src/ReservationRow.js 
This file will is a combination of front end and backend. It has code that will make reservations.js front end work properly and works together to make the reservation feature function as it should.

Manager/src/EditLayout.js 
This file will be the front end where a manager can add or delete another spot and edit the oberall dimensions of the garage. This code is the front end and will rely on manager/backendSpots/routes/spot.js for the back end process.

Manager/src/App.css
App.css is just CSS text that's meant to style whatever is going on in App.js (fonts, headers, margins, etc.) but we're not using App.js for anything but the router.

Manager/src/Pricing.js
This will hold out dynamic pricing model and will be a page where the mangaer can set the price for reservations, walk-ins, premium spots, handicapped etc. 

Manager/src/Pricing.js
This will hold out dynamic pricing model and will be a page where the mangaer can set the price for reservations, walk-ins, premium spots, handicapped etc. 

manager.backendSpots/config/keys.js
	This file is the configuration using our URI for mongo DB database. 

manager.backendSpots/models/spot.js
	This file will configure all of our characteristics and properties for parking spots. These characteristics are the spot number, floor number, Vacancy status, reservation status, and what type of spot it is (handicapped or premium).

manager/backendSpots/routes/spot.js
	This file has the back end code for creating, deleting, or getting the object of a parking spot in the backend. Any changes made using this file will eventually be reflected in the front end once they are connected for the second demo. 

manager/backendSpots/Server.js
	This file is what connects us to our mongo DB database and uses both express and mongoose to do that.
	
Files I need a description for: App.css, EditLayout.js, Overview.js, Pricing.js, ReservationRow.js, serviceWorker.js, 
