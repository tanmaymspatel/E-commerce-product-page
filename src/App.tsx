import Header from "./core/components/Header";
import ProductPage from "./pages/ProductPage";
import MobileNav from "./core/components/MobileNav";

function App() {
  return (
    <>
      <input type="checkbox" name="mobile-menu" id="mobileMenu" />
      <MobileNav />
      <div className="wrapper h-100 d-flex flex-column">
        <header id="header">
          <Header />
        </header>
        <main className="h-100 main-content flex-grow-1 overflow-y-auto">
          <ProductPage />
        </main>
      </div>
    </>
  );
}

export default App;
