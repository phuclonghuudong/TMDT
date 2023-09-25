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
