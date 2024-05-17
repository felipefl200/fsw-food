import { Product } from "@prisma/client";

export const computedProductOriginalPrice = (product: Product): string => {
    let formatPrice = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(Number(product.price))
    return formatPrice
}


export const formatCurrency = (value: number): string => {
    return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(value)
}

export const computedProductTotalPrice = (product: Product): string => {
    if (product.discountPercentage === 0) {
        return Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(Number(product.price))
    }
    let discount = Number(product.price) * (product.discountPercentage / 100)
    let totalWithDiscount = Number(product.price) - Number(discount)
    return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(totalWithDiscount)
}
