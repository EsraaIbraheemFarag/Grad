import { useHistory } from "react-router-dom";
function Product(this: any, prods: any) {
  if (Object.keys(prods.prods).length == 0) {
    return null;
  } else {
    return (
      <div className="card" onClick={() => clickHandler(prods.prods.id)}>
        <img
          src={prods.prods.images[0]}
          style={{ width: "200px", height: "200px" }}
        />
        <div className="title">
          <span style={{ fontWeight: "bold" }}>{prods.prods.brand}</span>
          <span style={{ fontWeight: "bold", float: "right" }}>
            {prods.prods.price}
          </span>
          <div className="paragraph ">
            <span>{prods.prods.description}</span>
          </div>
        </div>
      </div>
    );
  }
}
const clickHandler = (x: any) => {
  const history = useHistory();
  history.push("/ProductDetails/" + x.toString());
};
export default Product;
