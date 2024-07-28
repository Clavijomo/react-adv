import { createContext, CSSProperties, ReactElement } from 'react';
import { useProductHook } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[]
    className?: string;
    style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
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
            <div
                style={style}
                className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </Provider>
    )
}