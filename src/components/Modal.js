import React,{useState} from 'react'
import { product } from '../data'
const Modal = ({modal,closeModal,index,handleTab}) => {
    
    const [images,setImages] = useState(product[0].src)
   
  return (
    <section className={`${modal ? 'modal show': 'modal'}`}>
        
        <div className="main-img">
            <button onClick={() => closeModal(false)} className="close-modal">X</button>
           <img src={images[index]} alt="" className='modal-img' />
        </div>
        <div className="row-img">
            {
                images.map((elem,idx) => (
                    <img className={index === idx ?'active' : ''} src={elem} onClick={() => handleTab(idx) }/>
                ))
            }
        </div>
    </section>
  )
}

export default Modal