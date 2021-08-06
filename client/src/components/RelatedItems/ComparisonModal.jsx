import React, { useContext, useState } from "react";
import RelatedItemsImage from "./RelatedItemsImage.jsx";
import { ProductContext } from "../../App.jsx";
import { AiOutlineCheck } from "react-icons/ai";

const Modal = (props) => {
  const [product, setProduct] = useContext(ProductContext);

  if (!props.show) {
    return null;
  }
  return (
    <div className="comparison_modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">COMPARING</h4>
        </div>
        <div className="modal-body">
          <table>
            <thead className="tableHead">
              <tr>
              <td>{product.currentProduct.name}</td>
              <td></td>
              <td>{props.relatedItemName}</td>
              </tr>

            </thead>
            <tbody>
              {product.currentProduct.features.map((item, index) => {
                for(var results of props.relatedItemFeatures) {
                  if(item.feature === results.feature) {
                    return (
                      <tr>
                      <td><AiOutlineCheck /></td>
                      <td>{item.value}</td>
                      <td><AiOutlineCheck /></td>
                    </tr>
                    )
                  }
                }
                return  (
                  <tr>
                  <td><AiOutlineCheck /></td>
                  <td>{item.value}</td>
                  <td></td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <button className="modal_close" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
