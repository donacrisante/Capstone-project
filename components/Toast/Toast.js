import { useEffect } from "react";
import styled from "styled-components";


export default function Toast({ message, show, onClose }) {

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500); 

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return <ToastContainer show={show}>{message}</ToastContainer>;
};

const ToastContainer = styled.div`
  position: fixed;
  top: 200px;
  right: 60px;
  color: #eed9c4;
  background-color: black;
  padding: 10px 20px;
  border-radius: 5px;
  display: ${({ show }) => (show ? "block" : "none")};
`;