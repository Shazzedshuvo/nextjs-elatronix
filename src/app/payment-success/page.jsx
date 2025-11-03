import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-green-50 flex justify-center items-center py-10">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-4">Thank you for your purchase. Your transaction has been completed successfully.</p>
        <Link href="/">
          <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-all">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
