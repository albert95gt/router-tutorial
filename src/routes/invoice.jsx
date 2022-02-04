import { getInvoice } from "data";
import { useParams } from "react-router-dom";

export default function Invoice() {
    let { invoiceId } = useParams();
    let invoice = getInvoice(parseInt(invoiceId, 10))
    const { name, number, amount, due } = invoice;    
    return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {amount}</h2>
      <p>
        {name}: {number}
      </p>
      <p>Due Date: {due}</p>
    </main>
    )
  }