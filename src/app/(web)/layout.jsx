import Header from "./components/Header";

const WebLayout = ({ children }) => {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

export default WebLayout;
