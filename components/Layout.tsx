import React from "react";
import NavBar from "./NavBar";

// export default function Layout({ children }) {
//     console.log("🚀 ~ file: Layout.js ~ line 4 ~ Layout ~ Layout", children)
//     return (
//         <>
//             {/* <NavBar /> */}
//             <div>{children}</div>
//         </>
//     );
// }

type Props = {
    children: React.ReactNode;
};

export default function Layout(props: Props) {
    console.log("🚀 ~ file: Layout.tsx ~ line 19 ~ Layout ~ Layout")

    return (
        <div className="">
            {/* <NavBar /> */}
            {props.children}
        </div>
    );
}