import './App.css';

function App() {
  return (
    <div className="App">
      {/* //@ts-ignore */}
      <model-viewer
        ar
        modes="scene-viewer quick-look webxr"
        src={'/deer.glb'} // AR Android/Web
        ios-src={'/deer.usdz'} // AR iOS
        auto-rotate
        shadow-intensity="1"
        camera-controls
        style={{ width: "100vw", height: "90vh" }}
      >
      </model-viewer>
    </div>
  );
}

export default App;
