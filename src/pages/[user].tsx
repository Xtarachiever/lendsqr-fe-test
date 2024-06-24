import { useParams } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import { useEffect, useState } from "react"
import { retrieveUserDetailsFromIndexedDB } from "../store/IndexedDB"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Button from "../components/ReusableButtons/Button";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import TabContent from "../components/ReusableTabs/TabContent";
import { tabs } from "../components/ReusableTabs/TabDetails";

const User = () => { 
    const params:any = useParams()

    const [activeTab, setActiveTab] = useState<number>(tabs[0]?.id)

  return (
    <div>
        <Layout>
            <div className="user_page_wrapper">
                <div>
                    <p className="back_button"><HiOutlineArrowNarrowLeft /> <span>Back to Users</span></p>
                    <div className="title">
                        <p>User Details</p>
                        <div className="action_buttons">
                            <Button name="BLACKLIST USER" type="button" style={{color:'#E4033B', border:'2px solid #E4033B'}}/>
                            <Button name="ACTIVATE USER" type="button"/>
                        </div>
                    </div>
                </div>
                <div className="user_details_tab">
                    <div className="section">
                        <div className="details">
                            <img src="/avatar.svg" alt="user_avatar"/>
                            <div>
                                <p>Grace</p>
                                <sub>LSQFf587g90</sub>
                            </div>
                        </div>
                        <div className="tier">
                            <p>User's Tier</p>
                            <div className='rating'><AiFillStar /> <AiOutlineStar /> <AiOutlineStar /></div>
                        </div>
                        <div>
                            <p>₦200,000.00</p>
                            <p>9912345678/Providus Bank</p>
                        </div>
                    </div>
                    <div className="tab_header">
                        {tabs?.map(({ id, tabHeader }) => (
                            <p key={id} className={activeTab === id ? 'active_tab' : ''} onClick={()=>setActiveTab(id)}>{tabHeader}</p>
                        ))}
                    </div>
                </div>
                <div className="tab-content-wrapper">
                    <TabContent activeTab={activeTab} params={params?.user!}/>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default User