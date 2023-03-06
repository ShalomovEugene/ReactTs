import { useState } from "react";
import { IProduct } from "../models"

interface ProductProps {
    Product: IProduct
}

export function Product ({Product}:ProductProps) {
    const [details, setDetails] = useState(false);
    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400';
    const btnClasses = ["py-2","px-4","border" , btnBgClassName];


    return(
        <div
            className="border py-2 px-5 rounded flex flex-col items-center mb-2">
                <img src={Product.image} alt={Product.title} className="w-1/6"/>
                <p>{Product.title}</p>
                <span className="font-bold">{Product.price}</span>
                <button className={btnClasses.join(' ')} onClick={() => setDetails(prev => !prev)}>{details ? 'Hide Details' : 'Show Details'}</button>
                {details &&
                <div>
                    <p>{Product.description}</p>
                    <p style={{fontWeight: 'bold'}}>Rate: {Product?.rating?.rate}</p>
                </div>
                }
        </div>
    )
}