import { createContext, CSSProperties, ReactElement } from 'react';
import { useProductHook } from '../hooks/useProduct';
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[]
    className?: string;
    style?: CSSProperties;
    value?: number
    onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = (props: Props) => {
    const {
        product,
        children,
        className,
        value,
        style,
        onChange,
    } = props;

    const { counter, increaseBy } = useProductHook({ onChange, product, value });

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