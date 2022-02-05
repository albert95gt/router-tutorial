import { getInvoice, deleteInvoice } from "data";
import { useParams, useNavigate } from "react-router-dom";

export default function Invoice() {
    let navigate = useNavigate();
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
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices");
          }}
        >
          Delete
        </button>
      </p>
    </main>
    )
  }