import Header from "./core/components/Header";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="h-100 d-flex flex-column">
      <header id="header">
        <Header />
      </header>
      <main className="h-100 main-content flex-grow-1 overflow-hidden">
        <ProductPage />
      </main>
    </div>
  );
}

export default App;
