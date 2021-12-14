import { useState, createContext } from "react";

const ModalContext = createContext({
  isModalOpen: false,
  showModal: () => {},
  hideModal: () => {},
});

export const ModalContextProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const context = {
    isModalOpen: isOpen,
    showModal: showModal,
    hideModal: hideModal,
  };

  return (
    <ModalContext.Provider value={context}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
