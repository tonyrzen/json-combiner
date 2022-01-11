## About this function
This function can be run to merge two different JSON documents based on a common field. If the common field is missing from any object in the 2nd data array, the function will not run because we are looking for a 1-1 relationship with the common field. 

To bypass this functionality, you can include the `if/else` statement in line 20 to check for your desired fields and return only what you need. This example only returns the original object, but you can include any piece of information you need. 