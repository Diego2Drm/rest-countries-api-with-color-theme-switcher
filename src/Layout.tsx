import { Header } from "./components/Header";

interface LayputProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayputProps) => {
  return (
    <main className="pt-20">
      <Header />
      {children}
    </main>
  );
}