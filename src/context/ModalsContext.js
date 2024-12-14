import React, { createContext, useMemo, useState } from "react";

export const ModalsDispatchContext = createContext({
  open: () => {},
  close: () => {},
});

export const ModalsStateContext = createContext([]);

export const ModalsProvider = ({ children }) => {
  const [openedModals, setOpenedModals] = useState([]);

  const open = (Component, props) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component) => {
    setOpenedModals((modals) =>
      modals.filter((modal) => modal.Component !== Component)
    );
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
        {openedModals.map((modal, index) => {
          const { Component, props } = modal;
          return <Component key={index} isOpen={true} {...props} />;
        })}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};
