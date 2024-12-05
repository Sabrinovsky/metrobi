import "./App.css";

function App() {
  return (
    <div className="flex flex-1 gap flex-col">
      <header>Header</header>
      <div className="flex flex-col flex-1 gap">
        <div className="container flex flex-row flex-3 gap">
          <div className="flex flex-col flex-1 gap">
            <div className="flex-1 hero">Hero</div>
            <div className="flex-2 sidebar">Sidebar</div>
          </div>
          <div className="flex flex-col flex-1 gap">
            <div className="flex-3 main">Main</div>
            <div className="flex-1 extra">Extra</div>
          </div>
        </div>
        <div className="flex flex-1 gap">
          <div className="flex-2 related-images">Related images</div>
          <div className="flex-1 related-posts">Related posts</div>
        </div>
      </div>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
