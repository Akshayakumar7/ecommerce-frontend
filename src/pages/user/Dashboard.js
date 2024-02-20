// import React from 'react'
// import Layout from '../../components/Layout/Layout'
// import UserMenu from '../../components/Layout/UserMenu'
// import { useAuth } from '../../context/auth'

// const Dashboard = () => {
//     const [auth] = useAuth()
//     return (
//         <Layout title={"Dashboard"}>
//             <div className='container-flui p-3 m-3'>
//                 <div className='row'>
//                     <UserMenu />
//                 </div>
//                 <div className='col-md-9'>
//                     <div className='card w-75 p-3'>
//                         <h3>
//                             {auth?.user?.name}
//                         </h3>
//                         <h3>
//                             {auth?.user?.email}
//                         </h3>
//                         <h3>
//                             {auth?.user?.address}
//                         </h3>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     )
// }

// export default Dashboard


import React from 'react'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'
import Layout from '../../components/Layout/Layout'

const Dashboard = () => {
    const [auth] = useAuth()
    return (
        <Layout title={"User Dashboard"}>
            <div className="container-fluid m-3 p-3">
                <div className='row'>
                    <div className='col-md-3'>
                        <UserMenu />
                    </div>
                    <div className='col-md-9'>
                        <div className='card w-75 p-3'>
                            <h3>
                                User name :  {auth?.user?.name}
                            </h3>
                            <h3>
                                User email :  {auth?.user?.email}
                            </h3>
                            <h3>
                                User contact :  {auth?.user?.phone}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard