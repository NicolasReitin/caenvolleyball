import IntroBar from "@/Components/header/IntroBar";
import LogoClub from "@/Components/LogoClub";
import MenuNavbar from "@/Components/header/MenuNavbar";


export default function Header() {

    return (
        <>
            <IntroBar />
            <div className="navbar">
                <div className="navbar-content">
                    <div className="flex justify-around">
                        <LogoClub 
                        filePath="/assets/images/cvb4.png"
                        />

                        <MenuNavbar />
                    </div>
                </div>
            </div>
        </>
    );
}
