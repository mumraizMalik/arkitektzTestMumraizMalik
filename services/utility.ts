import {showMessage} from 'react-native-flash-message';

const displayMsg = (msg = 'Something went wrong!', type = 'warning') => {
  showMessage({
    message: msg,
    type: type,
    icon: type,
  });
};

export {displayMsg};
