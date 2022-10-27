import './App.css';
import qrcode from "./images/image-qr-code.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <img src={qrcode} alt="qrcode" />
          <div className="card-content">
            <h1>Improve your front-end skills by building projects</h1>
            <h2>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h2>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
