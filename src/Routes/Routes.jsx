import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import Classes from "../Pages/Classes/Classes";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses/MySelectedClasses";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'sign-up',
                element: <SignUp />
            },
            {
                path: 'instructors',
                element: <Instructors />
            },
            {
                path: 'classes',
                element: <Classes/>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'add-class',
                element: <AddClass />
            },
            {
                path: 'my-classes',
                element: <MyClasses />
            },
            {
                path: 'manage-users',
                element: <ManageUsers/>
            },
            {
                path: 'manage-classes',
                element: <ManageClasses/>
            },
            {
                path: 'my-selected-classes',
                element: <MySelectedClasses/>
            }
        ]
    }
])