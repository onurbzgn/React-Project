import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from '../../redux/actions/categoryActions';
import { saveProduct } from "../../redux/actions/productsAction";
import ProductDetaily from "./ProductDetail";
import { useParams } from "react-router-dom";

function AddOrUpdateProduct({
    products,
    categories,
    getCategories,
    saveProduct,
    history,
    ...props
}) {
    const { productId } = useParams();
    const [product, setProduct] = useState({ ...props.product });

    useEffect(() => {
        if (categories.length === 0) {
            getCategories();
        }
        setProduct({ ...props.product });
    }, [props.product]);

    function handleChange(event) {
        const { name, value } = event.target;
        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }));
    }

    async function handleSave(event) {
        event.preventDefault();
        try {
            await saveProduct(product); // Ürünü kaydet
            history.push("/"); // Ana sayfaya yönlendir
        } catch (error) {
            console.error("Ürün kaydetme hatası:", error); // Hata mesajı
        }
    }

    return (
        <ProductDetaily
            product={product}
            categories={categories}
            onChange={handleChange}
            onSave={handleSave}
        />
    );
}

export function getProductById(products, productId) {
    let product= products.find(product => product.id == productId) || null;
    return product

}

function mapStateToProps(state, ownProps) {
    const { productId } = ownProps.match?.params || {};
    const product = productId && state.productListReducer.length > 0
        ? getProductById(state.productListReducer, productId)
        : {};
    return {
        product,
        products: state.productListReducer,
        categories: state.categoryListReducer
    };
}

const mapDispatchToProps = {
    getCategories,
    saveProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
