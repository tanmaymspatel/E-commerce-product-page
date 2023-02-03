import ProductDetails from "../components/product-page/ProductDetails";
import ProductImage from "../components/product-page/ProductImage";
/**
 * @returns Whole product page
 */
function ProductPage() {
    return (
        <section className="section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="product-page-col">
                        <ProductImage />
                    </div>
                    <div className="product-page-col d-flex flex-column justify-content-center">
                        <ProductDetails />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ProductPage;
