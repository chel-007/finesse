function Blog() {
    const posts = [
      { id: 1, title: "Top 10 Fashion Pieces for 2025", excerpt: "Explore the must-have items for your wardrobe this year." },
      { id: 2, title: "How to Style Monochrome Looks", excerpt: "Tips for mastering the black-and-white trend." },
    ];
  
    return (
      <div className="bg-primary-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-primary-black text-center mb-12">From the Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="border border-primary-darkGray/20 rounded-lg p-6 hover:shadow-sm transition"
              >
                <h3 className="text-xl font-medium text-primary-black">{post.title}</h3>
                <p className="mt-2 text-primary-darkGray">{post.excerpt}</p>
                <a href="#" className="mt-4 inline-block text-primary-black font-medium hover:underline">
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Blog;