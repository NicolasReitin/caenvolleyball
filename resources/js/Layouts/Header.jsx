import IntroBar from "@/Components/header/IntroBar";
import LogoClub from "@/Components/LogoClub";
import MenuNavbar from "@/Components/header/MenuNavbar";


export default function Header() {

    return (
        <>
            <div className="header">
                <div className="content">
                    <IntroBar />
                    <div className="navbar">
                        <div className="navbar-content">
                            <div className="flex justify-around">
                                <LogoClub 
                                filePath="/assets/images/logo-cvb-black.png"
                                />

                                <MenuNavbar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
