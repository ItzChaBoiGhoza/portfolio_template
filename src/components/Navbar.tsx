import React from "react";
import { useState } from "react";

const Navbar = () => {
    return (
        <nav className="max-w-1/2 mx-auto rounded-xl">
            <div className="flex-1 flex justify-center mr-auto text-[28px] pt-10">
                <a href="#" className="mx-3 px-8 py-2 rounded-2xl hover:text-[#708993] text-(--base-color)">About</a>
                <a href="#" className="mx-3 px-8 py-2 rounded-2xl hover:text-[#708993] text-(--base-color)">Projects</a>
                <a href="#" className="mx-3 px-8 py-2 rounded-2xl hover:text-[#708993] text-(--base-color)">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;