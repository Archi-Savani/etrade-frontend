import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/data/Common";
const HeaderBrand = (props) => {
    return ( 
        <div className="header-brand">
            <Link href="/" className="logo">
            <Image
                src={props.light ? Logo.light : Logo.dark}
                alt="Site Logo"
                height={40}
                width={150}
            />
            </Link>
        </div>
     );
}
 
export default HeaderBrand;