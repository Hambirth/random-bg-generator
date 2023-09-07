function App() {
  const handleClickFunction = (e) => {
    const body = document.querySelector("body");
    body.style.background = getRandomColor();
  };

  function getRandomColor() {
    let letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <>
      <div className="container">
        <h1>Random Bg Color</h1>
        <button className="btn" onClick={handleClickFunction}>
          Click Me
        </button>
      </div>
    </>
  );
}

export default App;
