import { tabs } from "./TabDetails";
import { UserDetailsProps } from "../UserDetails/UserDetails";

type TabProps={
    activeTab:number,
    retrieveUserDetails: UserDetailsProps['retrieveUserDetails'];
}
const TabContent = ({ activeTab, retrieveUserDetails }:TabProps) => {


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