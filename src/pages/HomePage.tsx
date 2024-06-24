import Layout from "../components/Layout/Layout"
import DetailCard from "../components/ReusableCards/DetailCard"
import UserIcon from '/users_icon.svg';
import ActiveUsers from '/active_users.svg';
import UserLoans from '/user_loans.svg';
import UsersSaving from '/user_savings.svg';
import BasicTable from "../components/ReusableTable/Table";
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiUserX } from "react-icons/fi";
import { RiUserFollowLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import FilterCard from "../components/ReusableCards/FilterCard";
import { useNavigate } from "react-router-dom";
import { storeUserDetailsInIndexedDB } from "../store/IndexedDB";

type formProps ={
  organization:string
  phoneNumber:string
  username:string
  email:string
  status:string
  date:string
}
interface DataItem {
  profile: {
    organization: string[];
    phone:string;
  };
  id: number;
  email:string;
  name: string;
  phone: string;
  username:string;
  status:string[];
  createdAt:string;
  // Add other fields if necessary
}


const HomePage = () => {
  // Navigation
  const navigate = useNavigate();

  const [data, setData] = useState<DataItem[]>([])

  const [filterPopUp, setFilterPopUp] = useState<boolean>(false);
  const [activeDiv, setActiveDiv] = useState<{ [key: string]: boolean } | null>(null)
  const [loading, setLoading] = useState<boolean>(false);

  // Filter out the Active users
  const activeUsers = data?.filter((item: { status: string[] } )=> item?.status[0].toLowerCase() === 'active');

  const handleSelected = (id:string) => {
    setActiveDiv((prevSelectedItems) => ({
      ...prevSelectedItems,
      [id]: !prevSelectedItems?.[id],
    }));
  };

  const fetchData = async () =>{
    try{
      setLoading(true);
      await fetch('https://api.json-generator.com/templates/jWExjdifhpfn/data',{
        method:"GET",
        headers:{
          'Authorization':`Bearer ${import.meta.env.VITE_REACT_APP_JSON_TOKEN}`
        }
      })
      .then((response)=>response.json())
      .then(data=>{
        setLoading(false)
        setData(data)
      })
    }catch(e){
      setLoading(false)
      console.log(e)
    }
  }

  let filteredData = [...data] as DataItem[];

  const handleFilter = (values:formProps) =>{
    if(values?.organization !== ''){
        filteredData = data?.filter((item: { profile: { organization: string[]} }) => item?.profile?.organization[0] === values?.organization)
    }
    if(values?.phoneNumber !== ''){
        filteredData = data?.filter((item: { profile: { phone: string } } )=> item?.profile?.phone === values?.phoneNumber);
    }
    if(values?.username !== ''){
      filteredData = data?.filter((item: { username: string } )=> item?.username === values?.username);
    }
    if(values?.email !== ''){
      filteredData = data?.filter((item: { email: string } )=> item?.email === values?.email);
    }
    if(values?.status !== ''){
      filteredData = data?.filter((item: { status: string[] } )=> item?.status[0] === values?.status);
    }
    if(values?.date !== ''){
      filteredData = data?.filter((item: { createdAt: string } )=> item?.createdAt.slice(0, 10) === values?.date);
    }
    setData(filteredData)
    setFilterPopUp(false)
  }

  const handleReset = (reset:any) =>{
    reset();
    fetchData();
    setFilterPopUp(false)
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  const handleViewDetails = (row:any) =>{
    const activeUserData = data?.filter((item)=>item?.username === row);
    navigate(`/user/${row}`);
    storeUserDetailsInIndexedDB(activeUserData?.[0])
  }

  const columns:object[] = [
    {
      header:'ORGANIZATION',
      accessorKey: 'organization',
      accessorFn: (row:any) => (
      row.profile.organization[0]
      ),

    },
    {
      header:'USERNAME',
      accessorKey: 'username',

    },
    {
      header:'EMAIL',
      accessorKey: 'email',

    },
    {
      header:'PHONE NUMBER',
      accessorKey: 'phone',
      accessorFn: (row:any) => (row.profile.phone),
    },
    {
      header:'DATE JOINED',
      accessorKey: 'createdAt',
      accessorFn: (row:any) => (new Date(row.createdAt).toLocaleString('en-US', options))
    },
    {
      header: 'STATUS',
      accessorKey: 'status',
      cell: ({row}:any) => {
        const status = row.original.status[0]
        return <button className={`status_button ${status}`}>{status.charAt(0).toUpperCase() + status.slice(1)}</button>
      }
    },
    {
      header:'Actions',
      cell: ({row}:any) => (
        <span id={row.id} className='popup-action'>
            <BsThreeDotsVertical  onClick={()=>handleSelected(row?.id)}/>
            {
              activeDiv?.[row?.id] ?
              <div className='popup'>
                <p onClick={()=>handleViewDetails(row?.original?.username)}><BsEye fontSize={'1.0rem'} /> View Details</p>
                <p><FiUserX /> Blacklist User</p>
                <p><RiUserFollowLine /> Activate User</p>
              </div>
              : <></>
            }
        </span>
      ),

    }
  ]

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      <Layout>
         <div className="content_div">
          <div>
              <p className="large-font">Users</p>
              <div className="detail_card_collection">
                <DetailCard img={UserIcon} header="users" number={data?.length ? data?.length.toString() : '0'}/>
                <DetailCard img={ActiveUsers} header="active users" number={activeUsers?.length ? activeUsers?.length?.toString() : '0'}/>
                <DetailCard img={UserLoans} header="users with loans" number="253"/>
                <DetailCard img={UsersSaving} header="users with savings" number="43"/>
              </div>
          </div>
          {
            loading ? <p>Loading...</p>
            :
            (
              data?.length === 0
              ?
              <p className="no-data-padding">No Data Found</p>
              :
              <div className="table_wrapper">
                <BasicTable data={data} columns={columns} filterPopUp={filterPopUp} setFilterPopUp={setFilterPopUp} />
                {
                  filterPopUp ?
                  <div className="filter_wrapper">
                    <FilterCard data={data} handleFilter={handleFilter} handleReset={handleReset}/>
                  </div>
                  : <></>
                }
              </div>
            )
          }
         </div>
      </Layout>
    </div>
  )
}

export default HomePage