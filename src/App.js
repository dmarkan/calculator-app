import "./styles.css";
import calculate, { add, multiply, subtract, divide } from "./calculator";

export default function App() {
  return (
    <div className="App">
      <ul>
        <li> {calculate.add(1, 2)} </li>
        <li> {calculate.multiply(1, 2)} </li>
        <li> {calculate.subtract(1, 2)} </li>
        <li> {calculate.divide(1, 2)} </li>
      </ul>
    </div>
  );
}
