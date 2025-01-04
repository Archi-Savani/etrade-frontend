import Link from "next/link";
import { recentMonthList } from "@/utils";

const ArchiveWidget = () => {

    const recentMonths = recentMonthList(12);

    return (
      <div className="axil-single-widget mt--40 widget_archive">
        <h6 className="widget-title">Archives List</h6>
        <ul>
            {recentMonths.map((data, index) => (
                <li key={index}>
                    <Link href="#">{data}</Link>
                </li>
              ))}
        </ul>
      </div>
    );
}
 
export default ArchiveWidget;