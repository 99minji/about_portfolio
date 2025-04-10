import { useContext } from "react";
import { ModalsDispatchContext } from "../context/ModalsContext";

export default function useModal() {
  const { open, close } = useContext(ModalsDispatchContext);

  const openModal = (Component, props) => {
    open(Component, props);
  };
  const closeModal = (Component) => {
    close(Component);
  };

  return { openModal, closeModal };
}
