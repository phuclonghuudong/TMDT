const initialState = {
     item: [],
};

const addProducts = (state = initialState, action) => {
     switch (action.type) {
          case "ADD_PRODUCT":
               const productEXist = state.item.find(
                    (i) => i.id === action.payload.id
               );
               if (!productEXist) {
                    return {
                         item: [...state.item, action.payload],
                    };
               } else {
                    let newdesk = state.item;
                    const objIndex = newdesk.findIndex(
                         (obj) => obj.id === action.payload.id
                    );
                    if (newdesk[objIndex].quantity === undefined) {
                         newdesk[objIndex].quantity = 2;
                    } else {
                         newdesk[objIndex].quantity =
                              newdesk[objIndex].quantity + 1;
                    }
                    return { item: [...newdesk] };
               }
               break;
          case "DEL_PRODUCT":
               const newDesk = state.item;
               const objIndex = newDesk.findIndex(
                    (obj) => obj.id === action.payload.id
               );
               newDesk[objIndex].quantity = 1;
               newDesk.splice(objIndex, 1);
               return { item: [...newDesk] };

               break;

          default:
               return state;
               break;
     }
};

export default addProducts;
