import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/product';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {
    const {
        onProductCountChange,
        shoppingCart,
    } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {products.map(product => (
                    <ProductCard
                        onChange={onProductCountChange}
                        key={product.id}
                        value={shoppingCart[product.id]?.count || 0}
                        product={product}
                        className='bg-dark text-white'
                    >
                        <ProductImage className='custom-image' />
                        <ProductTitle
                            title='Hola mundo'
                            className='text-bold'
                        />
                        <ProductButtons
                            className={'custom-buttons'}
                        />
                    </ProductCard>
                ))}
            </div>

            <div className='shopping-cart'>
                {Object.entries(shoppingCart).map(([key, product]) => (
                    <ProductCard
                        key={key}
                        onChange={onProductCountChange}
                        product={product}
                        className='bg-dark text-white'
                        style={{ width: '100px' }}
                        value={product.count}
                    >
                        <ProductImage className='custom-image' />
                        <ProductButtons
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                            className={'custom-buttons'}
                        />
                    </ProductCard>
                ))}
            </div>
        </div>
    )
}
