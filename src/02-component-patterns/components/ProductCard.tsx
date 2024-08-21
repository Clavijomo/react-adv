import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: React.ReactElement | React.ReactElement[];
    children: ( args: ProductCardHandlers ) => JSX.Element,
    className?: string;
    style?: CSSProperties;
    value?: number
    initialValues?: InitialValues
    children: (args: ProductCardHandlers) => JSX.Element
    onChange?: (args: onChangeArgs) => void;
}
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}


export const ProductCard = (props: Props) => {
    const {
        product,
        className,
        initialValues,
        value,
        style,
        children,
        onChange,
    } = props;
export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props ) => {

    const {
        counter,
        maxCount,
        isMaxCountReached,
        reset,
        increaseBy
    } = useProductHook({ onChange, product, value, initialValues });
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } 
        = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{ counter, product, maxCount, increaseBy }}>
            <div
                style={style}
                className={`${styles.productCard} ${className}`}>
                {children({
                    maxCount: initialValues?.maxCount,
                    product,
                    count: counter,
                    isMaxCountReached,
                    reset,
                    increaseBy,
                })}
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >
                { 
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product, 

                        increaseBy,
                        reset,
                    })
                }
            </div>
        </Provider>
    )
}