
export default function Tab({ children, isActive, onClick }) {
    return (
      <button name={`tab${isActive ? " tab--active" : ""}`}
      onClick={onClick}
      >
        {children}
      </button>
    );
  }



  