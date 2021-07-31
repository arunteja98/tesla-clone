import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const footerStyles = {
    padding: "20px",
    textAlign: "center",
  };
  return (
    <div className="App">
      <Header />
      <Home />
      <div className="footer" style={footerStyles}>
        <p>
          This landing page is only created for learning purpose.Don't file any
          copy rights.
        </p>
        <p style={{ marginTop: "1rem" }}>@arunteja</p>
      </div>
    </div>
  );
}

export default App;
