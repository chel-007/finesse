import { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore"; // Named imports
import { db } from "../firebase/config"; // Import initialized db
import ReactMarkdown from "react-markdown"

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "blog"));

     console.log(q)
    getDocs(q)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(data)
        setPosts(data);
      })
      .catch((err) => console.error("Error loading posts:", err));
  }, []);

    // Format Firestore Timestamp to readable date
  const formatDate = (timestamp) => {
    if (!timestamp || !timestamp.seconds) return "No date available";
    return new Date(timestamp.seconds * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Convert content array to string for ReactMarkdown
  const renderContent = (content) => {
    if (!content || !Array.isArray(content)) return "No content available";
    return content.map((item) => item.text || JSON.stringify(item)).join("\n\n");
  };


  return (
    <div className="bg-primary-gray py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary-black text-center mb-12 tracking-tight">
          Blog
        </h2>
        {posts.length === 0 && (
          <p className="text-center text-primary-darkGray text-lg">No posts found.</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-primary-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header Image or Placeholder */}
              {post.header_image ? (
                <img
                  src={post.header_image}
                  alt={post.name}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
              ) : (
                <div className="w-full h-56 bg-primary-darkGray/10 flex items-center justify-center rounded-t-lg">
                  <span className="text-primary-darkGray text-sm">No image</span>
                </div>
              )}
              <div className="p-6">
                {/* Post Title */}
                <h3 className="text-xl font-semibold text-primary-black mb-2">
                  {post.name || "Untitled Post"}
                </h3>
                {/* Publish Date */}
                <p className="text-sm text-primary-darkGray mb-3">
                  Published: {formatDate(post.publish_date)}
                </p>
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-primary-gray text-primary-black text-xs font-medium px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {/* Content */}
                <ReactMarkdown
                  className="text-primary-darkGray prose prose-a:text-primary-black prose-a:underline hover:prose-a:text-primary-darkGray max-w-none"
                >
                  {renderContent(post.content)}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;