import React, {useState} from "react";
import SlidingChild from "../../components/SlidingChild/SlidingChild";



const DashboardScreen: React.FC = () => {
    const [open,setOpen] = useState(true);
    return (
        <SlidingChild isOpen={open}>
            <div onClick={()=>setOpen(false)}>Hello, I'm sliding!</div>
        </SlidingChild>
    );
}

export default DashboardScreen;