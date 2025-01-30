import Logo from "../ui/Logo";

type props = {
  children: React.ReactNode;
};

export default function Header({ children }: props) {
  return (
    <div className="container">
      <header className="header">
        <Logo />
        {children}
      </header>
    </div>
  );
}
