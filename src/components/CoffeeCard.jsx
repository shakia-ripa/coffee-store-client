import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://practice-coffee-server-ip1znse06-shakia-ripas-projects.vercel.app/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remainingCoffees = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remainingCoffees);
                        }
                    })
            }
        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Coffee" /></figure>
            <div className="card-body card-side">
                <div className='space-y-4'>
                    <p className='text-lg'><span className='font-semibold'>Name: </span>{name}</p>
                    <p className='text-lg'><span className='font-semibold'>Quantity: </span>{quantity}</p>
                    <p className='text-lg'><span className='font-semibold'>Supplier: </span>{supplier}</p>
                </div>
                <div className="join join-vertical space-y-4 ">
                    <button className="btn bg-[#D2B48C] text-white">View</button>
                    <Link to={`updateCoffee/${_id}`}>
                        <button className="btn bg-[#3C393B] text-white">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-[#EA4744] text-white">X</button>
                </div>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func
}

export default CoffeeCard;