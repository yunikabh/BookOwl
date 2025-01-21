// components/PurchasesSection.js
"use client";
const purchases = [
      { id: 1, title: "The Art of Design", date: "2024-01-15", price: "$16.00 USD" },
      { id: 2, title: "Nature Wonders", date: "2024-01-10", price: "$18.00 USD" },
    ];
const PurchasesSection = ({ purchases }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-700">Purchase History</h3>
      <div className="mt-4 space-y-4">
        {purchases.map((purchase) => (
          <div key={purchase.id} className="bg-white p-4 rounded-lg shadow">
            <h4 className="text-lg font-semibold text-gray-800">{purchase.title}</h4>
            <p className="text-gray-600">Date: {purchase.date}</p>
            <p className="text-gray-600">Price: {purchase.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchasesSection;
