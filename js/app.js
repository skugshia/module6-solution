/*
  Name: Sukayna Kugshia
  Date: 10/02/2019
  Description: The app.js file allows for behavior to the elements to be executed through the controller. 
                                  
                                  Assignment #6 
*/

(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];


function LunchCheckController($scope, $filter) {
	$scope.textboxComment = {"color" : "blue",
 						 "font-style": "italic"};
 $scope.CheckTooMuch = function () {
 		
     /*First the function checks whether the items listed are empty. 
     If empty, a message will be displayed to prompt for an entry.*/

	    if($scope.lunchItems == "" || $scope.lunchItems == undefined){
	    	$scope.checkEntryMessage = 'Please Enter Data First!';
	    	$scope.checkMessage = {"color" : "red"};
	    	$scope.lunchMenuStyle = {"border-color" : "red"};

	    }

	    /*If the list is not empty, the list will be spilt after the comma. 
	      Each item in the list will be evaluated to see whether it is an empty value.
	      If it is not an empty value, the lunchCount counter will increase, otherwise
	      the count will go towards lunchCountEmpty counter. These counters will be used to 
	      determine how many of the list entry are actual values in order to display the 
	      message accordingly.*/
	    else{
	    		var lunchArray = $scope.lunchItems.split(',');
	    		var lunchCount = 0;
	    		var lunchCountEmpty = 0;
	    		    		

	    		for(var i = 0; i < lunchArray.length; i++){
	    			if(lunchArray[i].trim() == "" || lunchArray[i].trim() == undefined){
	    			 lunchCountEmpty++;
	    			 lunchCount = lunchArray.length - lunchCountEmpty;
	    			}
	    			else{
	    				lunchCount = lunchArray.length - lunchCountEmpty;
	    			}
	    		}

	    		//If the message is 3 or less, it will display the message in green.
	    		if(lunchCount <= 3){
	    			$scope.checkEntryMessage = 'Enjoy!';
	    	        $scope.checkMessage = {"color" : "green"};
	    	        $scope.lunchMenuStyle = {"border-color" : "green"};
                }

                //If the message is 3 or more, it will display the message in red.
                else if(lunchCount > 3){
	    			$scope.checkEntryMessage = 'Too Much!';
	    	        $scope.checkMessage = {"color" : "red"};
	    	        $scope.lunchMenuStyle = {"border-color" : "red"};
                }
	    	
	    }
  };
}

})();

