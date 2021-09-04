import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Up from "./container/up/up";

function App() {
  return (
    <div className="container-css">
      <div style={{ height: "32px" }}></div>
      <div className="middle-white-container">
        <Up />

        <div className="navigation-letters">
          <span>Home</span>
          <span>{">"}</span>
          <span>Interactive Teaching</span>
          <span>{">"}</span>
          <span>Course</span>
        </div>
        {/* <MainContent /> */}
        <button className="btn btn-info">Test Button</button>
      </div>
    </div>
  );
}

export default App;
