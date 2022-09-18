import { useState,useEffect } from 'react';
import {product} from './data'
import Modal from './components/Modal';
import './App.css';

function App() {
  const [item,setItem] = useState([])
  const [index,setIndex] = useState(0)
  const [modal,setModal] = useState(false)
  const handleTab = (idx) => {
    setIndex(idx)
  }
  useEffect(() => {
    setItem(product)
  },[])
  
 
  return (
    <main className="main">
      <Modal modal={modal} closeModal={setModal} index={index} handleTab= {handleTab}/>
      {
        item.map(product => (
          <div className="details" key={product.id}>
            <div className="big-img" onClick={() => setModal(true)}>
              <img src={product.src[index]} alt="" />
            </div>
            <div className="box">
              <div className="row">
                <h2>{product.title}</h2>
                <span>${product.price}</span>
              </div>
              <div className="colors">
                {
                  product.colors.map((color,idx) => (
                    <button key={idx} style={{background:color}}></button>
                  ))
                }
              </div>
              <p>{product.description}</p>
              <p>{product.content}</p>
              <div className="thumb">
                  {
                    product.src.map((elem,idx) =>(
                      <img className={`${idx === index ? 'active' : ''}`} key={idx} src={elem} onClick={() => handleTab(idx)}/>
                    ))
                  }
              </div>
              <button className='cart'>add to cart</button>
            </div>
          </div>
        ))
      }
       
    </main>
  );
}

export default App;
