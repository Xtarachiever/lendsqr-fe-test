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

interface DataItem {
  id: number;
  name: string;
}

const HomePage = () => {
  const [data, setData] = useState<DataItem[]>([])
  const [activeDiv, setActiveDiv] = useState<{ [key: string]: boolean } | null>(null)

  const handleSelected = (id:string) => {
    setActiveDiv((prevSelectedItems) => ({
      ...prevSelectedItems,
      [id]: !prevSelectedItems?.[id],
    }));
  };

  const fetchData = async () =>{
    try{
      await fetch('https://api.json-generator.com/templates/jWExjdifhpfn/data',{
        method:"GET",
        headers:{
          'Authorization':`Bearer ${import.meta.env.VITE_REACT_APP_JSON_TOKEN}`
        }
      })
      .then((response)=>response.json())
      .then(data=>{
        setData(data)
      })
    }catch(e){
      console.log(e)
    }
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

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
                <p><BsEye fontSize={'1.0rem'} /> View Details</p>
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
                <DetailCard img={UserIcon} header="users" number="2,453"/>
                <DetailCard img={ActiveUsers} header="active users" number="2,453"/>
                <DetailCard img={UserLoans} header="users with loans" number="2,453"/>
                <DetailCard img={UsersSaving} header="users with savings" number="2,453"/>
              </div>
          </div>
          <div className="table_wrapper">
            <BasicTable data={data} columns={columns}/>
          </div>
         </div>
      </Layout>
    </div>
  )
}

export default HomePage