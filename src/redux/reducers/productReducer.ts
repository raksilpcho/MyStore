const initialState = {
    inventory: [],
    loading: false,
    error: null,
  };

  export const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'FETCH_INVENTORY_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_INVENTORY_SUCCESS':
        return { ...state, loading: false, inventory: action.payload, error: null };
      case 'FETCH_INVENTORY_FAILURE':
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
