import React,{useState,useEffect} from 'react'
// import {connect} from 'react-redux'
import { connect } from 'react-redux'
import json from './products.json'

function Products(props) {
    const data=(require('./products.json'))
    const [counter,setCounter]= useState(0)
    
    const addCart=(id)=>{
        if(localStorage.getItem('mycart')!=undefined){
            let arr=JSON.parse(localStorage.getItem('mycart'));
            if(arr.includes(id)){
                alert("Product ID already added");
            }
            else{
                arr.push(id);
                localStorage.setItem('mycart',JSON.stringify(arr));
                alert("Product ID added to cart");
                props.add()
            }
        }
        else{
            let arr=[];
            arr.push(id);
            localStorage.setItem('mycart',JSON.stringify(arr));
            alert("Product ID added to cart");
            props.add()
        }
    }
 
    return (
        <div>
            <h2> Latest Products </h2>
            <div className="row container">
                {json.products.map(item=>
                    <div className="card" style={{width:"400px",marginleft:"60px"}}>
                        <div className="card-body">
                            <h4 className="card-title">{item.price}</h4>
                            <h5 className="card-text">Name:{item.pname}</h5>
                            <p className="card-text">Quantity :{item.quantity}</p>
                            <a className="btn btn-primary" onClick={()=>addCart(item.id)}>Add to cart</a>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
 return{
     add:function(){
         dispatch({type:"INC",payload:1})
     }
 }
}
export default connect(null,mapDispatchToProps)(Products);