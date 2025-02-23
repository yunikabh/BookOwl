import axios from "axios"
import { ApiError } from "./apiError.js";
import 'dotenv/config';


// Function to verify Khalti Payment
export async function verifyKhaltiPayment(pidx) {
  const headersList = {
    "Authorization": `Key ${process.env.KHALTI_SECRET_KEY}`,
    "Content-Type": "application/json",
  };
  if (accessToken) {
    headersList["Authorization"] = `Bearer ${accessToken}`;
  }

  const bodyContent = JSON.stringify({ pidx });

  // Defines API request options
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
    throw new ApiError(500, "Payment verification failed", error.response?.data);
  }
}

// Function to initialize Khalti Payment
export async function initializeKhaltiPayment(details) {
  console.log("This is details",details);
  console.log("Khalti Secret Key:", process.env.KHALTI_SECRET_KEY);
console.log("Khalti Gateway URL:", process.env.KHALTI_GATEWAY_URL);

const headersList = {
  "Authorization": `Key ${process.env.KHALTI_SECRET_KEY}`,
  "Content-Type": "application/json",
};
if (accessToken) {
  headersList["Authorization"] = `Bearer ${accessToken}`;
}


const bodyContent = JSON.stringify({
  public_key: process.env.KHALTI_PUBLIC_KEY,
  amount: details.amount, // Must be in paisa
  purchase_order_id: details.purchased_order_id.toString(), // Ensure it's a string
  purchase_order_name: details.purchased_order_name.toString(), // Ensure it's a string
  return_url: details.return_url,
  website_url: details.website_url,
});

// Defines API request options
const reqOptions = {
  url: `${process.env.KHALTI_GATEWAY_URL}/api/v2/epayment/initiate/`,
  method: "POST",
  headers: headersList,
  data: bodyContent,
};

try {
  const response = await axios.request(reqOptions);
  return response.data; // Returns the response data (including pidx and payment_url)
} catch (error) {
  console.error("Error initializing Khalti payment:", error);
  throw new ApiError(500, "Payment initialization failed", error.response?.data);
}
}

