import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
    return (
        <>
            <div className='text-center'>
                <div className="list-group">
                    <h4>
                        Dashboard
                    </h4>
                    {/* <NavLink
                        to="/dashboard/admin/create-category"
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                    >
                        Create Category
                    </NavLink> */}
                    <NavLink
                        to="/dashboard/user/orders"
                        className="list-group-item list-group-item-action">
                        Your Orders
                    </NavLink>
                    <NavLink
                        to="/dashboard/user/profile"
                        className="list-group-item list-group-item-action">
                        Your Profile
                    </NavLink>


                </div>
            </div>

        </>
    )
}

export default UserMenu