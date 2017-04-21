const example = {
  "Trains": [
    {
      "Car": "6",
      "Destination": "Largo",
      "DestinationCode": "G05",
      "DestinationName": "Largo Town Center",
      "Group": "1",
      "Line": "BL",
      "LocationCode": "C05",
      "LocationName": "Rosslyn",
      "Min": "1"
    },
    {
      "Car": "8",
      "Destination": "Vienna",
      "DestinationCode": "K08",
      "DestinationName": "Vienna/Fairfax-GMU",
      "Group": "2",
      "Line": "OR",
      "LocationCode": "C05",
      "LocationName": "Rosslyn",
      "Min": "2"
    },
    {
      "Car": "6",
      "Destination": "Frnconia",
      "DestinationCode": "J03",
      "DestinationName": "Franconia-Springfield",
      "Group": "2",
      "Line": "BL",
      "LocationCode": "C05",
      "LocationName": "Rosslyn",
      "Min": "4"
    },
    {
      "Car": "6",
      "Destination": "NewCrltn",
      "DestinationCode": "D13",
      "DestinationName": "New Carrollton",
      "Group": "1",
      "Line": "OR",
      "LocationCode": "C05",
      "LocationName": "Rosslyn",
      "Min": "6"
    },
    {
      "Car": "6",
      "Destination": "Wiehle",
      "DestinationCode": "N06",
      "DestinationName": "Wiehle-Reston East",
      "Group": "2",
      "Line": "SV",
      "LocationCode": "C05",
      "LocationName": "Rosslyn",
      "Min": "6"
    },
    {
      "Car": "6",
      "Destination": "Largo",
      "DestinationCode": "G05",
      "DestinationName": "Largo Town Center",
      "Group": "1",
      "Line": "SV",
      "LocationCode": "C05",
      "LocationName": "Rosslyn",
      "Min": "10"
    }
  ]
}

const ROSSLYN_CODE = 'C05';

export default store => next => action => {

    if(action.type == 'START_TICK') {
    }
    return next(action);
}