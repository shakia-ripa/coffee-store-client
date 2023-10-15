import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updatedCoffee);

        fetch(`https://practice-coffee-server-ip1znse06-shakia-ripas-projects.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                
            })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl text-center font-bold mb-10">Update: {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* Name and Quantity row */}
                <div className="md:flex gap-4 mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">
                                Coffee Name
                            </span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder="Coffee Name" type="text" name="name" defaultValue={name} id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">
                                Available Quantity
                            </span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder="Available Quantity" type="text" name="quantity" defaultValue={quantity} id="" />
                        </label>
                    </div>
                </div>
                {/* Supplier and Taste row */}
                <div className="md:flex gap-4 mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">
                                Supplier Name
                            </span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder="Supplier Name" type="text" name="supplier" defaultValue={supplier} id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">
                                Taste
                            </span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder="Taste" type="text" name="taste" defaultValue={taste} id="" />
                        </label>
                    </div>
                </div>
                {/* Category and Details row */}
                <div className="md:flex gap-4 mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">
                                Category
                            </span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder="Category" type="text" name="category" defaultValue={category} id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">
                                Details
                            </span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder="details" type="text" name="details" defaultValue={details} id="" />
                        </label>
                    </div>
                </div>
                {/* Photo URL row */}
                <div className="mb-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">
                                Photo URL
                            </span>
                        </label>
                        <label className="input-group">
                            <input className="input input-bordered w-full" placeholder="Photo URL" type="text" name="photo" defaultValue={photo} id="" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block bg-[#D2B48C]" type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;