const fs = require('fs');

const data1 = require('./data1.json');
const data2 = require('./data2.json');

// This function will take in 2 JSON arrays and merge by a common field.
const mergeJSONByField = (arr1, arr2) => {
  // Create an empty array to populate.
  let res = [];

  // Map through the first array
  res = arr1.map((obj) => {
    // Get the index of synced fields
    const index = arr2.findIndex(el => el["email"] === obj["email"]);

    // To scan an object for compatability before extracting the fields we need:
    const dataFields = arr2[index];

    // These fields can be updated to any field values you need. Return only what you want.
    if (!dataFields.email || !dataFields.last_name){
      return {
        ...obj
      };
    } else {
      // Extract the desired fields from the 2nd JSON object: can also rename through destructuring.
      // This will not depend on the data's organization, but rather the unique field defined above.
      const { first_name: firstName, last_name: lastName } = arr2[index];

      // Spread the original oobject and return with updated fields
      return {
        ...obj,
        firstName,
        lastName
      };
    };
  });

  // Compile the entire res array into a new JSON document
  fs.writeFileSync('./data3.json', JSON.stringify(res));
}

// Execute the function
mergeJSONByField(data1, data2);
