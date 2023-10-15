import Swal from "sweetalert2";


const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);

        fetch('https://practice-coffee-server-ip1znse06-shakia-ripas-projects.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset();
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl text-center font-bold mb-10">Add Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* Name and Quantity row */}
                <div className="md:flex gap-4 mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">
                                Coffee Name
                            </span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full" placeholder="Coffee Name" type="text" name="name" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">
                                Available Quantity
                            </span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full" placeholder="Available Quantity" type="text" name="quantity" id="" />
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

                            <input className="input input-bordered w-full" placeholder="Supplier Name" type="text" name="supplier" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">
                                Taste
                            </span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full" placeholder="Taste" type="text" name="taste" id="" />
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

                            <input className="input input-bordered w-full" placeholder="Category" type="text" name="category" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">
                                Details
                            </span>
                        </label>
                        <label className="input-group">

                            <input className="input input-bordered w-full" placeholder="details" type="text" name="details" id="" />
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

                            <input className="input input-bordered w-full" placeholder="Photo URL" type="text" name="photo" id="" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block bg-[#D2B48C]" type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;