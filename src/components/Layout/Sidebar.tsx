import BriefCase from "/briefcase.svg";
import Home from "/home.svg";
import { IoIosArrowDown } from "react-icons/io";
import { customers, businesses, settings } from "./Section";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = ["/users"];
  return (
    <div className="sidebar-container">
      <div>
        <div className="organization">
          <img src={BriefCase} alt="brief_case" />
          <span className="name">Switch Organization</span>
          <IoIosArrowDown className="name" />
        </div>
        <div className="organization">
          <img src={Home} alt="home" />
          <span className="name">Dashboard</span>
        </div>
        <div className="segments">
          <p className="side_headers">CUSTOMERS</p>
          <div className="customers">
            {customers?.map(({ name, image, link }) => (
              <div
                className={`organization ${
                  ((link === location?.pathname) || (location?.pathname.includes("/user") && link === "/users")) &&
                    "active_link"
                }`}
                key={name}
                onClick={() => navigate(link!)}
              >
                <img src={image} alt="icon" />
                <span className="name">{name}</span>
              </div>
            ))}
          </div>
          <p className="side_headers">BUSINESSES</p>
          <div className="customers">
            {businesses?.map(({ name, image }) => (
              <div className="organization" key={name}>
                <img src={image} alt="icon" />
                <span className="name">{name}</span>
              </div>
            ))}
          </div>
          <p className="side_headers">SETTINGS</p>
          <div className="customers">
            {settings?.map(({ name, image }) => (
              <div className="organization" key={name}>
                <img src={image} alt="icon" />
                <span className="name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
