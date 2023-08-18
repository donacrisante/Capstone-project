export default function Badge({ children, isActive }) {
    return (
      <span name={`badge${isActive ? " badge--active" : ""}`}>
        {children}
      </span>
    );
  }