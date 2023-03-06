import { useContext } from 'react';
import CreateProduct from '../components/CreateProduct';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import { Product } from '../components/Product';
import { useProducts } from '../Hooks/products';
import { IProduct } from '../models';
import {ModalContext} from '../context/ModalContext'

function ProductsPage () {
    const {loading, error, products, addProduct} = useProducts();
    const {modal, open, close} = useContext(ModalContext)
    
    const createHeandler = (product: IProduct) => {
      close();
      addProduct(product)
    }
    

    return(
        <div className='container mx-auto max-w-2xl pt-5'>
        {loading && <Loader/>}
        {error && <ErrorMessage error={error}/>}
        {products.map(product => <Product Product={product} key={product.id} />)}
    
        {modal && 
        <Modal title='Create new product' onClose={close}>
          <CreateProduct onCreate={createHeandler}/>
        </Modal>
        }
    
        <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl p-5' onClick={open}>Create Product</button>
       </div>
    )
}

export default ProductsPage;