import axios from "axios"
import { ApiError } from "./apiError.js";

// Function to verify Khalti Payment
export async function verifyKhaltiPayment(pidx) {
  const headersList = {
    "Authorization": `Key ${process.env.KHALTI_SECRET_KEY}`,
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({ pidx });

  const reqOptions = {
    url: `${process.env.KHALTI_GATEWAY_URL}/api/v2/epayment/lookup/`,
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };

  try {
    const response = await axios.request(reqOptions);
    return response.data;
  } catch (error) {
    console.error("Error verifying Khalti payment:", error);
    throw error;
  }
}

// Function to initialize Khalti Payment
export async function initializeKhaltiPayment(details) {
  
  console.log("Khalti Secret Key:", process.env.KHALTI_SECRET_KEY);
console.log("Khalti Gateway URL:", process.env.KHALTI_GATEWAY_URL);

  const payload = {
    amount: details.amount, // Must be in paisa
    purchase_order_id: details.purchase_order_id, // Correct field name
    purchase_order_name: details.purchase_order_name, // Correct field name
    return_url: details.return_url,
    website_url: details.website_url,
  };
  
  const headersList = {
    "Authorization": `Key ${process.env.KHALTI_SECRET_KEY}`,
    "Content-Type": "application/json",
  };

  // const bodyContent = JSON.stringify(details);

  // const reqOptions = {
  //   url: `${process.env.KHALTI_GATEWAY_URL}/api/v2/epayment/initiate/`,
  //   method: "POST",
  //   headers: headersList,
  //   data: bodyContent,
  // };
  // console.log("Request payload",reqOptions);
  console.log("Khaltigateway",process.env.KHALTI_GATEWAY_URL)

  try{
    const response = await axios.post(`${process.env.KHALTI_GATEWAY_URL}/api/v2/payment/initiate/`,
      payload, // Pass the payload as the request body
      { headers: headersList } ) // Pass headers separately);
   
      return response.data;// Returns the response data (including pidx and payment_url)
  } catch (error) {
    console.error("Error initializing Khalti payment:", error);
    throw new ApiError(404,"Internal server",error.message);
  }
}

