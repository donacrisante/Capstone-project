export default function Tab({ children, isActive }) {
    return (
      <button name={`tab${isActive ? " tab--active" : ""}`}>
        {children}
      </button>
    );
  }

  