import logo from "@/assets/afrinoverse-logo.jpg";

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="AFRINOVERSE — Educate. Innovate. Empower."
      className={className + " w-auto select-none"}
      draggable={false}
    />
  );
}
