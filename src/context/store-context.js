import { createContext, useEffect, useReducer } from 'react';
import { medusaClient } from '../lib/medusa-client';

const defaultContext = {
  customer: null,
  setCustomer: async () => {},
};

const StoreContext = createContext(defaultContext);

const reducer = (state, action) => {
  switch (action.type) {
    case 'setCustomer':
      return {
        ...state,
        customer: action.payload,
      };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);

  const setCustomer = (customer) => {
    dispatch({ type: 'setCustomer', payload: customer });
  };

  useEffect(() => {
    medusaClient.auth
      .getSession()
      .then(({ customer }) => {
        setCustomer(customer);
      })
      .catch(() => {
        setCustomer(null);
      });
  }, []);

  return (
    <StoreContext.Provider value={{ ...state, setCustomer }}>
      {children}
    </StoreContext.Provider>
  );
};