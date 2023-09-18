const add = [];

const addItems = (state = add, action) => {
     switch (action.type) {
          case "ADD_DESK":
               return [state, action.payload];
               break;

          // case "DEL_ITEM":
          //      return (state = state.filter((x) => {
          //           return x.id !== action.payload.id;
          //      }));
          //      break;

          default:
               return state;
               break;
     }
};

export default addItems;
