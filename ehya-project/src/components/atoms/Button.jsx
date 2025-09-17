export default function Button({ children, variant = "primary", onClick }) {
  const base =
    "px-6 py-3 rounded font-medium transition duration-200 text-sm md:text-base";

  const styles = {
    primary: "bg-white text-blue-600 hover:bg-gray-100 shadow",
    outline: "border border-white text-white hover:bg-white hover:text-blue-600",
  };

  return (
    <button className={`${base} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}
