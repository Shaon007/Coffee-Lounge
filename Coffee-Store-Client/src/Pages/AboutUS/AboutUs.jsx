import React from 'react';

function AboutUs() {
  return (
    <div className="bg-gray-100">
      <header className="bg-gray-800 text-white p-5">
        <h1 className="text-xl text-center">Welcome to Our Coffee Shop</h1>
      </header>

      <main className="max-w-7xl mx-auto p-5">
        {/* Shop Story Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2024, Our Coffee Shop has been dedicated to providing the finest coffee experience. Our passion for
            coffee began with a simple idea: to serve freshly brewed coffee in a warm and welcoming atmosphere.
          </p>
          <p className="text-gray-700">
            We source our beans from sustainable farms, ensuring that every cup supports the communities that grow them. Our
            journey has been filled with love, passion, and a commitment to excellence.
          </p>
        </section>

        {/* Values Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Quality: We believe in serving only the best coffee.</li>
            <li>Sustainability: We are committed to environmentally friendly practices.</li>
            <li>Community: We support local farmers and engage with our community.</li>
            <li>Experience: We aim to provide a warm and welcoming environment for all our customers.</li>
          </ul>
        </section>

        {/* Meet Our Team Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <img src="team-member1.jpg" alt="Alice Johnson" className="w-full h-40 object-cover rounded-full mb-2" />
              <h3 className="font-semibold">Alice Johnson</h3>
              <p className="text-gray-600">Head Barista</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <img src="team-member2.jpg" alt="Mark Smith" className="w-full h-40 object-cover rounded-full mb-2" />
              <h3 className="font-semibold">Mark Smith</h3>
              <p className="text-gray-600">Coffee Roaster</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <img src="team-member3.jpg" alt="Sara Brown" className="w-full h-40 object-cover rounded-full mb-2" />
              <h3 className="font-semibold">Sara Brown</h3>
              <p className="text-gray-600">Customer Relations</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Us for a Cup!</h2>
          <p className="text-gray-700 mb-6">We invite you to visit us and experience the warmth and flavors of our coffee. We
            can't wait to serve you!</p>
          <a href="" className="bg-yellow-500 text-gray-800 px-4 py-2 rounded hover:bg-yellow-600">Contact Us</a>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-5 text-center">
        <p>&copy; 2024 Coffee Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutUs;
