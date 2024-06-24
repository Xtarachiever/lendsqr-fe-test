

type UserDetailsProps={
    retrieveUserDetails:{
        profile:{
            name:string,
            phone:string,
        }
        email:string,
        status:string[]
    }
}
const UserDetails = ({retrieveUserDetails}:UserDetailsProps) => {
    // console.log(retrieveUserDetails)
  return (
    <div className="user_details_container">
        <div className="section">
            <p>Personal Information</p>
            <div className='details'>
                <div>
                    <p>FULL NAME</p>
                    <p>{retrieveUserDetails?.profile?.name}</p>
                </div>
                <div>
                    <p>PHONE NUMBER</p>
                    <p>{retrieveUserDetails?.profile?.phone}</p>
                </div>
                <div>
                    <p>EMAIL ADDRESS</p>
                    <p>{retrieveUserDetails?.email}</p>
                </div>
                <div>
                    <p>BVN</p>
                    <p>{retrieveUserDetails?.profile?.phone}</p>
                </div>
                <div>
                    <p>GENDER</p>
                    <p>FEMALE</p>
                </div>
                <div>
                    <p>CHILDREN</p>
                    <p>None</p>
                </div>
                <div>
                    <p>TYPE OF RESIDENCE</p>
                    <p>Parent's Apartment</p>
                </div>
            </div>
        </div>
        <div className='section section-2'>
          <p>Education and Employment</p>
          <div className='details'>
                <div>
                    <p>LEVEL OF EDUCATION</p>
                    <p>{retrieveUserDetails?.profile?.name}</p>
                </div>
                <div>
                    <p>EMPLOYMENT STATUS</p>
                    <p>{retrieveUserDetails?.status?.[0]}</p>
                </div>
                <div>
                    <p>SECTOR OF EMPLOYMENT</p>
                    <p>{retrieveUserDetails?.email}</p>
                </div>
                <div>
                    <p>DURATION OF EMPLOYMENT</p>
                    <p>5 Years</p>
                </div>
                <div>
                    <p>MONTHLY INCOME</p>
                    <p>None</p>
                </div>
                <div>
                    <p>LOAN REPAYMENT</p>
                    <p>40,000</p>
                </div>
          </div>
        </div>
        <div className='section section-3'>
          <p>Socials</p>
          <div className='details'>
            <div>
                <p>TWITTER</p>
                <p>@ {retrieveUserDetails?.profile?.name}</p>
            </div>
            <div>
                <p>PHONE NUMBER</p>
                <p>{retrieveUserDetails?.profile?.phone}</p>
            </div>
            <div>
                <p>EMAIL</p>
                <p>{retrieveUserDetails?.email}</p>
            </div>
            <div>
                <p>RELATIONSHIP</p>
                <p>Sister</p>
            </div>
          </div>
        </div>
        <div className='section section-4'>
          <p>Guarantor</p>
          <div className='details'>
            <div>
                <p>TWITTER</p>
                <p>@ {retrieveUserDetails?.profile?.name}</p>
            </div>
            <div>
                <p>PHONE NUMBER</p>
                <p>{retrieveUserDetails?.profile?.phone}</p>
            </div>
            <div>
                <p>EMAIL</p>
                <p>{retrieveUserDetails?.email}</p>
            </div>
            <div>
                <p>RELATIONSHIP</p>
                <p>Sister</p>
            </div>
          </div>
        </div>
        <div className='section section-5'>
          <div className='details'>
            <div>
                <p>TWITTER</p>
                <p>@ {retrieveUserDetails?.profile?.name}</p>
            </div>
            <div>
                <p>PHONE NUMBER</p>
                <p>{retrieveUserDetails?.profile?.phone}</p>
            </div>
            <div>
                <p>EMAIL</p>
                <p>{retrieveUserDetails?.email}</p>
            </div>
            <div>
                <p>RELATIONSHIP</p>
                <p>Sister</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserDetails