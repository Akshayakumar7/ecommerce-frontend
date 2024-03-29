import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const CreateProducts = () => {
    return (
        <Layout title={"Dashboar - Create products"}>
            <div className="container-fluid m-3 p-3">
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminMenu />
                    </div>
                    <div className='col-md-3'>
                        <h1>
                            Create Products
                        </h1>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default CreateProducts