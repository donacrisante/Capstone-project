import styled from "styled-components";

export default function Notification({ message }) {
  return <p>{message}</p>;
}

/* const NotificationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #4caf50; /* Green background */
  /* color: white;
  text-align: center;
  padding: 16px;
  z-index: 999; */ /* Make sure it appears on top of other elements */
/* `;  */
