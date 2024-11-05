import Button from "./Button";

const CheckoutSummary = () => {
  return (
    <div className="bg-white p-6">
      <h2>Summary</h2>
      <div>
        <p>Total</p>
        <p>Amount</p>
      </div>
      <div>
        <p>Shipping</p>
        <p>Amount</p>
      </div>
      <div>
        <p>Grand Total</p>
        <p>Amount</p>
      </div>
      <Button variant="primary" fullWidth>Continue and Pay</Button>
    </div>
  );
};
export default CheckoutSummary;
