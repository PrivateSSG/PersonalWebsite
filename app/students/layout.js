import React from "react";
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }) {
    return (
        <>
        <div className="flex space-x-16 max-lg:space-x-4 ">
            <div className="border-slate-400 border-r-2">
            <Sidebar />

            </div>
            {children}
        </div>
        
        </>
        

    )
}
