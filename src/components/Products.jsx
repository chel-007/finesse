function Products() {
    const items = [
      { id: 1, name: "Minimal Dress", price: "$120", img: "https://via.placeholder.com/300" },
      { id: 2, name: "Chic Blazer", price: "$150", img: "https://via.placeholder.com/300" },
      { id: 3, name: "Sleek Bag", price: "$80", img: "https://via.placeholder.com/300" },
    ];
  
    return (
      <div className="bg-primary-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-primary-black text-center mb-12">Featured Pieces</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-primary-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <img src={item.img} alt={item.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-primary-black">{item.name}</h3>
                  <p className="text-primary-darkGray">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Products;