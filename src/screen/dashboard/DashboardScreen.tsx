import React, {useState} from "react";
import DropDownMenu from "../../components/DropDownMenu";
import SlidingChild from "../../components/SlidingChild/SlidingChild";



const DashboardScreen: React.FC = () => {
    const [open,setOpen] = useState(true);
    return (<>
            <DropDownMenu></DropDownMenu>
        <SlidingChild isOpen={open}>
            <div onClick={()=>setOpen(false)}>Hello, I'm sliding!</div>
        </SlidingChild>
    </>
    );
}

export default DashboardScreen;