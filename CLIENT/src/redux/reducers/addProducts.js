const initialState = {
     desk: [],
};

const addProducts = (state = initialState, action) => {
     switch (action.type) {
          case "ADD_PRODUCT":
               const productEXist = state.desk.find(
                    (i) => i.id === action.payload.id
               );
               if (!productEXist) {
                    return {
                         desk: [...state.desk, action.payload],
                    };
               } else {
                    let newdesk = state.desk;
                    const objIndex = newdesk.findIndex(
                         (obj) => obj.id === action.payload.id
                    );
                    if (newdesk[objIndex].quantity === undefined) {
                         newdesk[objIndex].quantity = 2;
                    } else {
                         newdesk[objIndex].quantity =
                              newdesk[objIndex].quantity + 1;
                    }
                    return { desk: [...newdesk] };
               }
               break;
          case "DEL_PRODUCT":
               const newDesk = state.desk;
               const objIndex = newDesk.findIndex(
                    (obj) => obj.id === action.payload.id
               );
               newDesk[objIndex].quantity = 1;
               newDesk.splice(objIndex, 1);
               return { desk: [...newDesk] };

               break;

          default:
               return state;
               break;
     }
};

export default addProducts;
