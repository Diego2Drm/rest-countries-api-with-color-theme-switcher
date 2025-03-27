import { Header } from "./components/Header";

interface LayputProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayputProps) => {
  return (
    <main className="pt-20 md:px-10">
      <Header />
      {children}
    </main>
  );
}