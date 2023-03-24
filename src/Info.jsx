import Inventory from "./Inventory.json";

export function Info({ name, pro }) {
  return (
    <>
      <div className="Contains">
        <h1 className="c">{name}</h1>
        {Inventory.productos.map((product) => {
          if (pro === "package_sale_price") {
            return (
              <div className="d" key={product.id}>
                {product.package_purchase_price * (15 / 100) +
                  product.package_purchase_price}
              </div>
            );
          } else if (pro === "units_sale_price") {
            return (
              <div className="d" key={product.id}>
                {product.unit_purchase_price * (15 / 100) +
                  product.unit_purchase_price}
              </div>
            );
          } else if (pro === "package_profit") {
            return (
              <div className="d" key={product.id}>
                {product.package_purchase_price * (15 / 100)}
              </div>
            );
          } else if (pro === "unit_sale_price") {
            return (
              <div className="d" key={product.id}>
                {product.unit_purchase_price * (15 / 100)}
              </div>
            );
          } else if (pro === "total_inversion") {
            return (
              <div className="d" key={product.id}>
                {product.package_purchase_price * (15 / 100) + product.package_purchase_price * 20}
              </div>
            );
          } else if (pro === "total_earnings") {
            return (
              <div className="d" key={product.id}>
                {product.unit_purchase_price * (15 / 100) * 40}
              </div>
            );
          } else {
            return (
              <div className="d" key={product.id}>
                {product[pro]}
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
