Prerequisites
Download the Postman application from https://www.postman.com/

Run server
1. In the backendSpots directory type the following script: npm run server
2. In the console you should see the following messages: "Server is running on port 5000" followed by "MongoDB Connected!" 
3. For this demo I set the server to port 5000 but you can change it in the port variable in server.js line 22.

Test API Server Get Request
1. Make sure your server is still running in the console or else this will not work.
2. In Postman click "Create a request".
3. Keep the request set to "Get" (it should be set to this by default).
4. In "Enter request URL" enter: http://localhost:5000/api/spots
5. Click "Send"
6. If successful Status should read "200 OK".

Test API Server Post Request
1. In Postman change mode from "Get" to "Post".
2. Go to the "Headers" section of the first navbar (the one below where you enter the URL, not the second navbar). Under "key", type in "Content-Type". Under value, type in "application/json".
3. In the first navbar go to "Body" and click the "raw" circle.
4. In the raw terminal use the following JSON format below. Use your own data. Characterstic names (spotNumber, floorNumber, etc.) must be in "". All strings and numbers must be in "". Booleans do not need to be in "".
{
	"spotNumber": "2",
	"floorNumber": "One",
	"isVacant": true,
	"isReserved": false,
	"isHandicapped": false,
	"isPremium": false
}
5. Click "Send"
6. Status should read "200 OK" and the data should be listed in the console. There should also be an id number generated with the information in the console.

Test API Server Delete Request
1. In Postman change mode to "Delete"
2. ***In the URL bar type: http://localhost:5000/api/spots/<id number of spot you want deleted>
3. Click "Send"
4. Status should read "200 OK" and the console should read: {"success":true}
