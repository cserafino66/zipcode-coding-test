import React from 'react';
import 'free-zipcode-database.csv';

const Result = props => {
  let latA;
  let longA;
  let latB;
  let longB;
  let zipArray = csvJSON('free-zipcode-database.csv')
  zipArray.forEach(zip => {
    if (zip["Zipcode"] === zipcodeA) {
      latA = Math.abs(zip["Zipcode"]["Lat"])
      longA = Math.abs(zip["Zipcode"]["Long"])
    }
    if (zip["Zipcode"] === zipcodeA) {
      latB = Math.abs(zip["Zipcode"]["Lat"])
      longB = Math.abs(zip["Zipcode"]["Long"])
    }
  });

  let latDiff = latA - latB;
  let longDiff = longA - longB;

  let distance = Math.sqrt( ((latDiff * 65) ** 2) + ((longDiff * 65) ** 2) )

  return(
    "The two zip codes are " + distance + " miles apart."
  )

}

export default 'Result';
