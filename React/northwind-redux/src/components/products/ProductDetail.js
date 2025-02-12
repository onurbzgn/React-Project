import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";


const ProductDetail = ({
    categories,
    product,
    onSave,
    onChange
}) => {

    return (
        <form onSubmit={onSave}>
            <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
            <TextInput name="productName"
                Label="Product Name"
                value={product.productName}
                onChange={onChange}
                error="Hata!"
            />

            <SelectInput name="categoryId"
                label="Category"
                value={product.categoryId || ""}
                defaultOption="Seçiniz"
                options={categories.map(category => ({
                    value: category.id,
                    text: category.categoryName
                }))}
                onChange={onChange}
                error="HATA!" />

            <TextInput name="unitPrice"
                Label="Unit Price"
                value={product.unitPrice}
                onChange={onChange}
                error="Hata!"
            /> <TextInput name="quantityPerUnit"
                Label="Quantity Per Unit"
                value={product.quantityPerUnit}
                onChange={onChange}
                error="Hata!"
            /> <TextInput name="unitsInStock"
                Label="Unit İn Stock"
                value={product.unitInStock}
                onChange={onChange}
                error="Hata!"
            />


            <button type="submit" className="btn btn-success"> Save</button>

        </form>
    )

}

export default ProductDetail