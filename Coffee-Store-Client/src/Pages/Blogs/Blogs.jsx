import React from 'react';

function BlogPage() {
  return (
    <div className="bg-gray-100">
      <header className="bg-gray-800 text-white p-5">
        <h1 className="text-xl text-center">Welcome to Our Coffee Blog</h1>
      </header>

      <main className="max-w-7xl mx-auto p-5">
        {/* Blog Intro Section */}
        <section className="mb-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">Explore the World of Coffee</h2>
          <p className="text-gray-700 mb-4">
            Dive into our latest articles, tips, and stories that celebrate the wonderful journey of coffee from bean to cup.
          </p>
        </section>

        {/* Blog Posts Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Post 1 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-semibold">The Perfect Brew: How to Make the Best Coffee at Home</h3>
              <p className="text-gray-600 mb-2">Discover tips and tricks for brewing the perfect cup of coffee at home...</p>
              <p className="text-gray-400 text-sm">October 10, 2024</p>
              <a href="/blog/the-perfect-brew" className="text-yellow-500 hover:underline">Read More</a>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-semibold">The Journey of Coffee: From Bean to Cup</h3>
              <p className="text-gray-600 mb-2">Learn about the fascinating journey of coffee from the farm to your cup...</p>
              <p className="text-gray-400 text-sm">October 15, 2024</p>
              <a href="/blog/coffee-journey" className="text-yellow-500 hover:underline">Read More</a>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-semibold">Exploring Different Coffee Beans: A Beginner's Guide</h3>
              <p className="text-gray-600 mb-2">A guide to understanding different types of coffee beans and their flavors...</p>
              <p className="text-gray-400 text-sm">October 20, 2024</p>
              <a href="/blog/coffee-beans-guide" className="text-yellow-500 hover:underline">Read More</a>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mt-10">
          <h2 className="text-2xl font-semibold mb-4">Join Us for a Cup!</h2>
          <p className="text-gray-700 mb-6">We invite you to visit us and experience the warmth and flavors of our coffee. We can't wait to serve you!</p>
          <a href="/contact" className="bg-yellow-500 text-gray-800 px-4 py-2 rounded hover:bg-yellow-600">Contact Us</a>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-5 text-center">
        <p>&copy; 2024 Coffee Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default BlogPage;
