import React, {useContext, useState} from 'react';
import '../../styles/vins.css'
import VinList from "./VinList";

const Vin = props =>
        <div className="col-md-4">
            <div className="product py-4">
                <div className="text-center image-block" ><img src={props.vin.src}  width="200" /></div>
                <div className=" text-center">
                    <h5>{props.vin.name}</h5>
                </div>
                <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
                    {(props.vin.caveId
                            ? <div></div>
                            : <button className="btn btn-primary" key={props.vin.id}  >
                        Ajouter à ma cave
                        </button>
                    )}
                    <div className="add">
                        <span className="product_fav">{props.vin.rating} </span>/
                        <span className="product_fav">100 </span>
                    </div>
                </div>
            </div>
        </div>

export default Vin;


