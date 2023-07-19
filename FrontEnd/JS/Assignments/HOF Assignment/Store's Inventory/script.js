const dollerEquivalentRuppee = 80;

const products = [
    {
        name: "AAA012-PCBA",
        manufactured: "2022-03-25",
        expiry: "2024-05-05",
        price: "$699",
    },
    {
        name: "A1AB252-PCBA",
        manufactured: "2022-06-15",
        expiry: "2025-07-02",
        price: "$299",
    },
    {
        name: "AAC034-PCBA",
        manufactured: "2022-010-20",
        expiry: "2025-19-10",
        price: "$899",
    },
    {
        name: "AAB624-PCBA",
        manufactured: "2023-01-05",
        expiry: "2025-01-20",
        price: "$499",
    },
];

function convertDollerToRuppee(productList){
    const newList = productList.map((product)=>{
        const convertedPrice = parseInt(product.price.replace("$", "")) * dollerEquivalentRuppee;

        return{...product, price: convertedPrice.toString().concat("Rs") };
    });
    return newList; 
}
console.log(typeof products);
console.log(convertDollerToRuppee(products));