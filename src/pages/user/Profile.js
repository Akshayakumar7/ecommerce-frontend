import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'

const Profile = () => {
    return (
        <Layout>
            <div className='container-flui p-3 m-3'>
                <div className='row'>
                    <UserMenu />
                </div>
                <div className='col-md-9'>
                    <h1>Your Profile</h1>
                </div>
            </div>
        </Layout>
    )
}

export default Profile