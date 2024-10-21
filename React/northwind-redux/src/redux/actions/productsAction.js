import { type } from "@testing-library/user-event/dist/type"
import * as actionTypes from "./actionTypes"


export function getProductsSuccess(products) {
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products }
}

export function createProductSuccess(product) {
    return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product }
}

export function updateProductSuccess(product) {
    return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product }
}

export function saveProductApi(product) {
    const url = "http://localhost:3000/products/" + (product.id || "");

    return fetch(url, {
        method: product.id ? "POST" : "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(product)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function saveProduct(product) {
    return function (dispatch) {
        return saveProductApi(product).then(savedProduct => {
            product.id ? dispatch(updateProductSuccess(savedProduct)) : dispatch(createProductSuccess(savedProduct))
        }).catch(error=>{
            throw error;
        })
    }
}

export async function handleResponse(response) {
    if(response.ok){
        return response.json()
    }
    const error=await response.text()
    throw  new Error(error)
}

export async function handleError(eror){
    console.error("bir hata oluştur")
    throw eror

}


export function getProducts(categoryId) {
    return function (dispatch) {
        let url = "http://localhost:3000/products"
        if (categoryId) {
            url = url + "?categoryId=" + categoryId
        }
        return fetch(url).then(r => r.json())
            .then(result => dispatch(getProductsSuccess(result)))
    }
}