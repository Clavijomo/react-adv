import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
<<<<<<< HEAD
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const product: Product = {
=======
import '../styles/custom-styles.css';

const product = {
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
<<<<<<< HEAD
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <ProductCard
                    className='bg-dark text-white'
                    product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'Hola Mundo'} />
                    <ProductCard.Buttons className={'custom-buttons'} />
                </ProductCard>

                <ProductCard product={product} className='bg-dark text-white'>
                    <ProductImage
                        className='custom-image'
                    />
                    <ProductTitle
                        title='Hola mundo'
                        className='text-bold'
                    />
                    <ProductButtons
                        className={'custom-buttons'}
                    />
                </ProductCard>
                <ProductCard
                    product={product}
                    style={{
                        backgroundColor: '#70D1F8'
                    }}             
                >
                    <ProductImage 
                        style={{
                            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2'
                        }}
                    />
                    <ProductTitle 
                        style={{
                            fontWeight: 'bold'
                        }}
                        title='Hola mundo' 
                    />
                    <ProductButtons 
                        style={{
                            display: 'flex',
                            justifyContent: 'end'
                        }}
                    />
=======

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard 
                    product={ product }
                    className="bg-dark text-white">

                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-bold"/>
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard 
                    product={ product }
                    className="bg-dark text-white"
                >
                    <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttons" />
>>>>>>> 75b401a22cf382c0169ec206a8f9efb21b85d9f4
                </ProductCard>

                <ProductCard 
                    product={ product }
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductTitle style={{ fontWeight: 'bold' }} />
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}/>
                </ProductCard>


            </div>
        </div>
    )
}
