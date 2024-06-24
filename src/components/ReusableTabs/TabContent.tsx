import { tabs } from "./TabDetails"
import { useEffect, useState } from "react"
import { retrieveUserDetailsFromIndexedDB } from "../../store/IndexedDB"
type TabProps={
    activeTab:number,
    params:string
}
const TabContent = ({ activeTab, params }:TabProps) => {
    const [retrieveUserDetails, setRetrieveUserDetails] = useState<any>([])

    useEffect(()=>{
        retrieveUserDetailsFromIndexedDB(params)
        .then((storedData) => {
          setRetrieveUserDetails(storedData);
        })
        .catch((error) => {
          console.error('Error retrieving user details:', error);
        });
    },[params])

    const renderActiveTabContent = () => {
        const activeTabData = tabs.find(tab => tab?.id === activeTab);
        if (activeTabData && activeTabData.component) {
          const ActiveComponent = activeTabData.component;
          return <ActiveComponent retrieveUserDetails={retrieveUserDetails} />;
        }
        return null;
    };

  return (
    <div className="tab_wrapper">
        <div className="tab_content_div">
            {renderActiveTabContent()}
        </div>
    </div>
  )
}

export default TabContent