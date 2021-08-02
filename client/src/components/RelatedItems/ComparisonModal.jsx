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
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Comparing</h4>
        </div>
        <div className="modal-body">
          <table>
            <thead className="tableHead">
              <td>{product.currentProduct.name}</td>
              <td></td>
              <td>{props.relatedItemName}</td>
            </thead>
            <tbody>
              {product.currentProduct.features.map((item, index) => {
                console.log(item.value);
                if (item.feature === props.relatedItemFeatures[index].feature) {
                  return (
                    <tr>
                      <td>{item.value}</td>
                      <td>{item.feature}</td>
                      <td>{item.value}</td>
                    </tr>
                  );
                }
                if (
                  typeof item.feature === "boolean" &&
                  item.feature === true &&
                  props.relatedItemFeatures[index].feature === true
                ) {
                  return (
                    <tr>
                      <td>
                        <AiOutlineCheck />
                      </td>
                      <td>
                        <AiOutlineCheck />
                        {item.feature}
                      </td>
                      <td>
                        <AiOutlineCheck />
                      </td>
                    </tr>
                  );
                } else {
                  return;
                  <tr>
                    <td></td>
                  </tr>;
                }
              })}
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <button className="button" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
