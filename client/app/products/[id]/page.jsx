import React from "react";

// 🧠 Generate dynamic metadata for each product page
export async function generateMetadata({ params }) {
  const { id } = params;

  return {
    title: `Product ${id} | EcoBazaar`,
    description: `View detailed information about product ${id} on EcoBazaar.`,
  };
}

const ProductPage = async ({ params }) => {
  const { id } =await params;
  console.log("Product ID:", id);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Product Details
      </h1>
      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
        <p className="text-gray-800 text-lg">
          Product ID: <span className="font-semibold">{id}</span>
        </p>
        <p className="text-gray-600 mt-2">
          This is a dynamically rendered product details page for product{" "}
          <strong>{id}</strong>.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
