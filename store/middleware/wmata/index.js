import request from 'superagent';
import { WMATA } from '../../../keys';
import { setTrainTimes } from '../../state/transit/actions';

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
        request.get('https://api.wmata.com/StationPrediction.svc/json/GetPrediction/' + ROSSLYN_CODE)
        .set({api_key: WMATA})
        .then(resp => {
          store.dispatch(setTrainTimes(resp.body.Trains));
        });
        store.dispatch(setTrainTimes(example.Trains));
        setInterval(() => {
          request.get('https://api.wmata.com/StationPrediction.svc/json/GetPrediction/' + ROSSLYN_CODE)
          .set({api_key: WMATA})
          .then(resp => {
            store.dispatch(setTrainTimes(resp.body.Trains));
          });
          // store.dispatch(setTrainTimes(example.Trains));
        }, 60000)
    }
    return next(action);
}