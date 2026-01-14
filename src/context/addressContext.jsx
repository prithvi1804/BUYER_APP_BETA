import { createContext, useState } from "react";

/**
 * Context for managing delivery and billing addresses.
 */
export const AddressContext = createContext({
  deliveryAddress: {},
  setDeliveryAddress: () => { },
  billingAddress: {},
  setBillingAddress: () => { },
});

/**
 * Provider component for AddressContext.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components.
 */
export function AddressContextProvider({ children }) {
  const [deliveryAddress, setDeliveryAddress] = useState();
  const [billingAddress, setBillingAddress] = useState();
  return (
    <AddressContext.Provider
      value={{
        deliveryAddress,
        setDeliveryAddress,
        billingAddress,
        setBillingAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}
