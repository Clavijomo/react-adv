import { createContext } from 'react';
import { useProductHook } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
    const {
        counter,
        increaseBy
    } = useProductHook();

    return (
        <Provider value={{
            counter,
            product,
            increaseBy
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    )
}