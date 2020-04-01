API Unit Test Information
***********************************************
Unit test performed on API routes using PostMan
PostMan is a get and post simulator that can send an receive JSON payloads.

The following get and post use cases were tested:

//To get price returned in JSON from api/getprice
{
	"start" : "06:00",
	"end"   : "08:00"
}

To test for system responses to erronious input data; tests with various permutations of 
erronious input data were conducted.

//To test changes to api/priceapi and api/testpriceapi

{
	"model_name" : "Live Model",
	"occupancy_percent": [20, 20, 18, 0, 45, 80, 90, 75, 72, 78, 72, 75, 85, 82, 90, 90, 75, 45, 43, 30, 34, 40, 34, 20],
	"base_rate": 6,
	"min_thresh": 60,
	"max_thresh": 90,
	"base_rate_mult": 1.4,
	"total_spots": 100,
	"operation": "makenew"
}

To test for system responses to erronious input data; tests with various permutations of 
erronious input data were conducted.

//To create historic database entries use this JSON template
{
	"model_name" : "PM-1",
	"data": "2020-MM-DD"
	"occupancy_percent": [20, 20, 18, 0, 45, 80, 90, 75, 72, 78, 72, 75, 85, 82, 90, 90, 75, 45, 43, 30, 34, 40, 34, 20],
	"actual_occupancy_percent": [10, 10, 18, 0, 35, 60, 70, 70, 80, 90, 60, 55, 60, 45, 40, 35, 30, 40, 25, 20, 15, 10, 19, 20],
	"base_rate": 6,
	"min_thresh": 60,
	"max_thresh": 90,
	"base_rate_mult": 1.4,
	"total_spots": 100,
	"operation": "makenew"
}

To test for system responses to erronious input data; tests with various permutations of 
erronious input data were conducted.

Further, test were conducted on independent methods of the PriceModelClass.js.

Class Method Unit Test Information
***********************************************
The PriceModelClass was inserted into a JavaScript IDE, independent of
the express server environment and stimulated with various input to 
evaluate methods for correct output.

The following functions were used to perform tests:

let occupancy_precent = [20, 20, 18, 0, 45, 80, 90, 75, 72, 78, 72, 75, 85, 82, 90, 90, 75, 45, 43, 30, 34, 40, 34, 20];
let myModel = new PriceModelClass("Price Model Test", 6, 60, 90, 1.4, occupancy_precent, 100);

console.log(myModel.calculateHourlyRateArray());

Above output was logged to console and compared to excel derived output values for confirmation.

/* Charles Owen
* Price model class for the manipulation and calclulation of dynamic pricing.
* Module suports API functions for getting dynamic price based 
* on 2 24-hour format input values; start, end, calculation of 
* hourly rate array based on admin defined values. 
*/
class PriceModelClass{
    constructor(model_name, base_rate, min_thresh, max_thresh, base_rate_mult, occupancy_percent, total_spots){
        this.model_name = model_name;      
        this.base_rate = base_rate;
        this.min_thresh = min_thresh;
        this.max_thresh = max_thresh;
        this.base_rate_mult = base_rate_mult;
        this.occupancy_percent = occupancy_percent;
        //this.hours_to_park = hours_to_park;
        this.total_spots = total_spots;
    }
    /*
    * Core feature of the class; the price formula itself.
    * See report 1 for detailed derivation.
    */
    priceFormula(occPer){
        if(occPer > this.min_thresh && occPer <= this.max_thresh){
        return (this.base_rate)*(1+(occPer-this.min_thresh)*((this.base_rate_mult-1)/(this.max_thresh-this.min_thresh)));
        }
        //This logic makes our function piecewise
        else if(occPer > this.max_thresh){
        return (this.base_rate)*(1+(this.max_thresh-this.min_thresh)*((this.base_rate_mult-1)/(this.max_thresh-this.min_thresh)));
        }
        return this.base_rate;
    }
    /*
    * Calculates price for every hour of the day
    * using the dynamic settings and returns 
    * those values in an array.
    */
    calculateHourlyRateArray(){
        let hourlyRates = [];
        let tempArr = this.occupancy_percent;
        for(let i=0; i<24; i++){
            hourlyRates.push((this.priceFormula(tempArr[i])).toFixed(2));
        }       
        return hourlyRates;
    }
    /*
    * Caculates price for every hour of the day 
    * using the base rate ONLY.
    */
    calculateHourlyRateArrayStatic(){
        let hourlyRates = [];
        let rate = this.base_rate;
        for(let i=0; i<24; i++){
            hourlyRates.push(rate);
        }
        return hourlyRates;
    }
    /*
    * Calculates total daily revenue with STATIC rates.
    */
    calculateTotalDailyRevenue(revenueArray){
        let revenue = 0;
        for(let i=0; i<24; i++){
            revenue += parseFloat(revenueArray[i]);
        }
        return revenue.toFixed(2);
    }
    /*
    * Calculates total daily revenue with DYNAMIC rates.
    * 
    */
    calculateDailyRevenue(hourlyRate, occuArr){
        let dailyRevArray = [];
        //this.occupancy_percent was working
        //let tempArr = occuArr;
        for(let i=0; i<24; i++){
            dailyRevArray.push((hourlyRate[i]*(occuArr[i]/100)*this.total_spots).toFixed(2));
        }
        return dailyRevArray;
    }
    /*
    * Calculates the price a custome should pay for parking
    * between two 24-hour formatted times.
    * Input as start, end and array of hourly rates.
    * Some code commented out, but kept for reference purposes.
    */
   customerPrice(start, end, hourlyRates){

        start = start.split(":");
        end = end.split(":");
        var startDate = new Date(0, 0, 0, start[0], start[1], 0);
        //console.log(parseInt(start[0]));
        //console.log(parseInt(end[0]));
        //console.log(parseInt(end[0]));
        //console.log(hourlyRates);
        //console.log(start[1]);
        var endDate = new Date(0, 0, 0, end[0], end[1], 0);
        var diff = endDate.getTime() - startDate.getTime();
        var hours = Math.floor(diff / 1000 / 60 / 60);
        diff -= hours * 1000 * 60 * 60;
        var minutes = Math.floor(diff / 1000 / 60);

        if (hours < 0)
        hours = hours + 24;

        //iterate over the hours
        var charge = 0;
        for(let i = parseInt(start[0]); i<=parseInt(end[0]); i++){
            //console.log('hi');
            if(i == parseInt(start[0]) && parseInt(start[1]) > 0 && parseInt(start[1]) != 0){
                charge += (parseFloat(hourlyRates[i])*((60-start[1])/60));
                start[1]=0;
                //console.log(charge);
                continue;
            }
            if(i == parseInt(end[0]) && parseInt(end[1]) > 0 && parseInt(end[1]) != 0){
                charge += (parseFloat(hourlyRates[i])*(end[1]/60));
                end[1]=0;
                //console.log(charge);
                continue;
            }
            //This loop engages if no trailing minutes and at least an hour of time between the two values
            if((parseInt(start[1]) == 0 && parseInt(end[1]) == 0) && (parseInt(end[0])-parseInt(start[0]))>0){
                    for(let k = parseInt(start[0]); k<=parseInt(end[0])-1; k++){
                        charge += parseFloat(hourlyRates[k]);
                        //console.log(charge);
                        continue;
                    }
                    //JSON style return
                    return {price: "" + charge.toFixed(2)};
                    //String style return
                    //return charge.toFixed(2) + " for " + (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes + " hours";
            }
            charge += parseFloat(hourlyRates[i-1]);
        }
        //console.log(charge.toFixed(2));
        //JSON style return
        return {price: "" + charge.toFixed(2)};
        //String style return
        //return charge.toFixed(2) + " for " + (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes + " hours";
    }
        
   
   // changePercentageArray(){

   // }

}

Console logging code to test each method's output values
**********************************

let occupancy_perecent = [20, 20, 18, 0, 45, 80, 90, 75, 72, 78, 72, 75, 85, 82, 90, 90, 75, 45, 43, 30, 34, 40, 34, 20];
let myModel = new PriceModelClass("Price Model Test", 6, 60, 90, 1.4, occupancy_perecent, 100);

//Output verified with excel data
console.log(myModel.calculateHourlyRateArray());

//Output verfied as being array of base rate values
console.log(myModel.calculateHourlyRateArrayStatic());

//Using above dynamic output array, calculate dynamic daily revenue
//Output values verfied using excel data
let dynamicRateArray = ["6.00", "6.00", "6.00", "6.00", "6.00", "7.60", "8.40", "7.20", "6.96", "7.44", "6.96", "7.20", "8.00", "7.76", "8.40", "8.40", "7.20", "6.00", "6.00", "6.00", "6.00", "6.00", "6.00", "6.00"];
console.log(myModel.calculateDailyRevenue(dynamicRateArray, occupancy_perecent));

//Using above static output array, calculate static daily revenue
//Output values verified using excel data
let staticArray = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
console.log(myModel.calculateDailyRevenue(staticArray, occupancy_perecent));

//Using the dynamic daily rate array, calculate total revenue
//for the day
let dynamicDailyRevenue = ["120.00", "120.00", "108.00", "0.00", "270.00", "608.00", "756.00", "540.00", "501.12", "580.32", "501.12", "540.00", "680.00", "636.32", "756.00", "756.00", "540.00", "270.00", "258.00", "180.00", "204.00", "240.00", "204.00", "120.00"];
console.log(myModel.calculateTotalDailyRevenue(dynamicDailyRevenue));

//Using the static dailt rate array, calculate total revenue
//for the dat
let staticDailyRevenue = ["120.00", "120.00", "108.00", "0.00", "270.00", "480.00", "540.00", "450.00", "432.00", "468.00", "432.00", "450.00", "510.00", "492.00", "540.00", "540.00", "450.00", "270.00", "258.00", "180.00", "204.00", "240.00", "204.00", "120.00"];
console.log(myModel.calculateTotalDailyRevenue(staticDailyRevenue));

//Test output of the getprice method for external API use
let start = "06:00";
let end = "09:00";
//Using above derived dynamic hourly rates
let dailyRates = ["6.00", "6.00", "6.00", "6.00", "6.00", "7.60", "8.40", "7.20", "6.96", "7.44", "6.96", "7.20", "8.00", "7.76", "8.40", "8.40", "7.20", "6.00", "6.00", "6.00", "6.00", "6.00", "6.00", "6.00"];
console.log(myModel.customerPrice(start, end, dailyRates));


