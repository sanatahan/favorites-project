import { Outlet } from "react-router-dom";

export const Users = () => {
    return (
        <div>
            <h2>Users1</h2>
            <h2>Users2</h2>
            <h2>Users3</h2>
            <Outlet />
        </div>
    );
};
