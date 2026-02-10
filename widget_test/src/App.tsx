// import './App.css'
import { BillingWidget } from "@algorizz/billing-widget";

function App() {
  const widgetProps = {
    apiBase: "https://api.billing.algorizz.com",
    userId: "himanshuarya3110@gmail.com",
    productId: "PINK_SALT",
    razorpayKeyId: "",
    accessToken: ""
  }
  return (
    <>
      <div>
        <BillingWidget {...widgetProps} />
      </div>
    </>
  )
}

export default App
