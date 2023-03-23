// import ListProduct from '../../components/ListProduct';
import ListCart from './ListCart';

function Cart({listCart,handleRemoveCart,handleChange}) {
    return ( <> 
        <ListCart handleChange={handleChange} typeRender={'CART'} handleRemoveCart={handleRemoveCart} listCart={listCart} title={'Danh sách giỏ hàng'}/>
    </> );
}

export default Cart;