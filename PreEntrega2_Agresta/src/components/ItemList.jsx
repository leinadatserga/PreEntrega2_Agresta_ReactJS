import Item from "./Item";

const ItemList = ({ product }) => {
    return(
        <>
            { product.map ( item => <Item key={ item.idProd } item = { item } />)}
        </>
    )
};

export default ItemList;