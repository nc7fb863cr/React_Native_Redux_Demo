import { ADD, EDIT, DELETE } from './Types';

const initialState = {
  deviceList: [
    {
      'name': 'Home',
      'key':'presave-1',
      'volumn':67,
      'url': require('../assets/icons/comfort.png'),
    },
    {
      'name': 'Commute',
      'key':'presave-2',
      'volumn':20,
      'url': require('../assets/icons/lightweight.png'),
    },
  ],
};

export default function Reducer(state = initialState, action){
  switch (action.type){
    case ADD:
      return {
        ...state,
        deviceList: state.deviceList.concat({
          ...action.payload,
          key: action.payload['key'],
        })
      }
    
    case EDIT:
      return {
        ...state,
        deviceList: state.deviceList.map(item => {
          if (item['key'] == action['key']){
            return {...action.payload}
          } else {
            return item;
          }
        })
      }
    
    case DELETE:
      return {
        ...state,
        deviceList: state.deviceList.filter((item) => item['key'] != action['key'])
      }

    default:
      return state;
  }
}