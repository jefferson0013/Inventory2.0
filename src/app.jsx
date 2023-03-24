import { Info } from "./Info";
import "./app.css";

export function App() {
  return (
    <div className="contain">
      <h1 className="uno" >Inventory Products</h1>
      <div className="inventoryContain">
        <Info name="Name" pro="name"></Info>
        <Info name="Products" pro="products"></Info>
        <Info name="Units" pro="units"></Info>
        <Info name="Porcentaj" pro="porcentaje_in_profit"></Info>
        <Info name="Price" pro="package_purchase_price"></Info>
        <Info name="Unit Price" pro="unit_purchase_price"></Info>
        <Info name="Pack sale" pro="package_sale_price"></Info>
        <Info name="Unit sale" pro="units_sale_price"></Info>
        <Info name="Pack SP" pro="package_profit"></Info>
        <Info name="Unit SP" pro="unit_sale_price"></Info>
        <Info name="Total I" pro="total_inversion"></Info>
        <Info name="Total E" pro="total_earnings"></Info>
      </div>
    </div>
  );
}
