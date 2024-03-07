import IntroBar from "@/Components/navbar/IntroBar";
import LogoClub from "@/Components/navbar/LogoClub";
import MenuNavbar from "@/Components/navbar/MenuNavbar";


export default function Navbar() {

    return (
        <>
            <IntroBar />
            <div className="navbar">
                <div className="navbar-content">
                    <div className="flex justify-around">
                        <LogoClub />

                        <MenuNavbar />
                    </div>
                </div>
            </div>
        </>
    );
}
