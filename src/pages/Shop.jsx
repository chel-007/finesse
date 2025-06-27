import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config"; // Import initialized db

function Shop() {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   getDocs(collection(db, "shop"))
  //     .then((snapshot) => {
  //       const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //       setItems(data);
  //     })
  //     .catch((err) => console.error("Error loading items:", err));
  // }, []);

  return (
    <div className="bg-primary-gray py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-primary-black text-center mb-12">Get a Look</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-primary-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
            >
              {item.image && (
                <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
              )}
              <div className="p-4">
                <h3 className="text-lg font-medium text-primary-black">{item.name}</h3>
                <p className="text-primary-darkGray">{item.price}</p>
                <p className="mt-2 text-primary-darkGray">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    className="mt-4 inline-block text-primary-black font-medium underline hover:text-primary-darkGray"
                  >
                    Shop Now
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;