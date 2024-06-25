

export type UserDetailsProps={
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
            <p className="section_header">Personal Information</p>
            <div className='details'>
                <div>
                    <p className="mid-font">FULL NAME</p>
                    <p>{retrieveUserDetails?.profile?.name}</p>
                </div>
                <div>
                    <p className="mid-font">PHONE NUMBER</p>
                    <p>{retrieveUserDetails?.profile?.phone}</p>
                </div>
                <div>
                    <p className="mid-font">EMAIL ADDRESS</p>
                    <p>{retrieveUserDetails?.email}</p>
                </div>
                <div>
                    <p className="mid-font">BVN</p>
                    <p>{retrieveUserDetails?.profile?.phone}</p>
                </div>
                <div >
                    <p className="mid-font">GENDER</p>
                    <p>FEMALE</p>
                </div>
                <div>
                    <p className="mid-font">CHILDREN</p>
                    <p>None</p>
                </div>
                <div>
                    <p className="mid-font">TYPE OF RESIDENCE</p>
                    <p>Parent's Apartment</p>
                </div>
            </div>
        </div>
        <div className='section'>
          <p className="section_header">Education and Employment</p>
          <div className='details'>
                <div>
                    <p className="mid-font">LEVEL OF EDUCATION</p>
                    <p>{retrieveUserDetails?.profile?.name}</p>
                </div>
                <div>
                    <p className="mid-font">EMPLOYMENT STATUS</p>
                    <p>{retrieveUserDetails?.status?.[0]}</p>
                </div>
                <div>
                    <p className="mid-font">SECTOR OF EMPLOYMENT</p>
                    <p>{retrieveUserDetails?.email}</p>
                </div>
                <div>
                    <p className="mid-font">DURATION OF EMPLOYMENT</p>
                    <p>5 Years</p>
                </div>
                <div>
                    <p className="mid-font">MONTHLY INCOME</p>
                    <p>None</p>
                </div>
                <div>
                    <p className="mid-font">LOAN REPAYMENT</p>
                    <p>40,000</p>
                </div>
          </div>
        </div>
        <div className='section'>
          <p className="section_header">Socials</p>
          <div className='details'>
            <div>
                <p className="mid-font">TWITTER</p>
                <p>@ {retrieveUserDetails?.profile?.name}</p>
            </div>
            <div>
                <p className="mid-font">PHONE NUMBER</p>
                <p>{retrieveUserDetails?.profile?.phone}</p>
            </div>
            <div>
                <p className="mid-font">EMAIL</p>
                <p>{retrieveUserDetails?.email}</p>
            </div>
            <div>
                <p className="mid-font">RELATIONSHIP</p>
                <p>Sister</p>
            </div>
          </div>
        </div>
        <div className='section'>
          <p className="section_header">Guarantor</p>
          <div className='details'>
            <div>
                <p className="mid-font">TWITTER</p>
                <p>@ {retrieveUserDetails?.profile?.name}</p>
            </div>
            <div>
                <p className="mid-font">PHONE NUMBER</p>
                <p>{retrieveUserDetails?.profile?.phone}</p>
            </div>
            <div>
                <p className="mid-font">EMAIL</p>
                <p>{retrieveUserDetails?.email}</p>
            </div>
            <div>
                <p className="mid-font">RELATIONSHIP</p>
                <p>Sister</p>
            </div>
          </div>
        </div>
        <div className='section section-5'>
          <div className='details'>
            <div>
                <p className="mid-font">TWITTER</p>
                <p>@ {retrieveUserDetails?.profile?.name}</p>
            </div>
            <div>
                <p className="mid-font">PHONE NUMBER</p>
                <p>{retrieveUserDetails?.profile?.phone}</p>
            </div>
            <div>
                <p className="mid-font">EMAIL</p>
                <p>{retrieveUserDetails?.email}</p>
            </div>
            <div>
                <p className="mid-font">RELATIONSHIP</p>
                <p>Sister</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserDetails