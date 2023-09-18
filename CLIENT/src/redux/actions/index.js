export const ADD_DESK = (product) => {
     return {
          type: "ADD_DESK",
          payload: product,
     };
};
export const ADD_PRODUCT = (product) => {
     return {
          type: "ADD_PRODUCT",
          payload: product,
     };
};

export const DEL_PRODUCT = (product) => {
     return {
          type: "DEL_PRODUCT",
          payload: product,
     };
};
