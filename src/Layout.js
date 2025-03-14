import react, { Children } from "react";
import { useLocation } from "react-router-dom";
import HeaderAbout from "./hader_footer/header_about";
import HeaderCon from "./hader_footer/header_con";
import HeaderFeed from "./hader_footer/header_feed";
import HeaderLog from "./hader_footer/header_login";
import HeaderPro from "./hader_footer/header_pro";
import Home from "./Home";


const Layout = ({ children }) => {
    const location = useLocation();

    const renderHeader = () => {

        switch (location.pathname) {

            case "/about":
                return <HeaderAbout />;
            case "/feed":
                return <HeaderFeed />;
            case "/contact":
                return <HeaderCon />;
            case "/login":
                return <HeaderLog />;
            case "/product":
                return <HeaderPro />;
            case "/re":
                return <HeaderLog/>;
            case "/forg":
                return <HeaderLog/>; 
                case "/Loc":
                return <HeaderCon/>;   
           
           


            default:
                return (<Home/>);

        }
    };
    return (
        <div>
            {renderHeader()}
            <main>{children}</main>
        </div>
    );
};

export default Layout;