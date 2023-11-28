import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';

import './styles.css';



const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    console.log('CART: ', context.cartProducts)

    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon 
                    className="h-7 w-7 text-black cursor-pointer"
                    onClick={() => context.closeCheckoutSideMenu()}/>
                </div>
            </div>
            <div className='px-6'>
            {
                context.cartProducts.map(product => (
                    <OrderCard
                        key={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                    />
                ))
            }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu