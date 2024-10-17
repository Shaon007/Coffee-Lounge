import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

function UpdateCoffee() {
  const specificCoffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo ,price} =
    specificCoffee;
  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
      price
    };
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount>0) {
          Swal.fire({
            title: 'Success!',
            text: 'Updated Coffee Information',
            icon: 'success',
            confirmButtonText: 'Updated',
          });
        }
      });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleUpdate}
        className="max-w-5xl mx-auto bg-[#F4F3F0] px-4 md:px-8 py-4 "
      >
        <h6 className="text-blueGray-400 text-3xl mt-3 mb-6 font-bold uppercase text-center">
          Update Coffee for: {name}
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Enter coffee name"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Chef
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                placeholder="Enter coffee chef"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter coffee supplier"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Taste
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Enter coffee taste"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter coffee category"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                price
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Enter coffee price"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Details
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Enter coffee details"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Enter photo URL"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
          <div className="w-full px-4">
            <div className="relative w-full mb-3">
              <input
                className="border w-full py-2 rounded-md text-[#331A15] font-semibold bg-[#D2B48C] "
                type="submit"
                value="Update Coffee"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdateCoffee;
