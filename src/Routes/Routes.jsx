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
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Payment from "../Pages/Dashboard/Payment/Payment";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";

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
                element: <InstructorRoute><AddClass /></InstructorRoute>
            },
            {
                path: 'my-classes',
                element: <InstructorRoute><MyClasses /></InstructorRoute>
            },
            {
                path: 'manage-users',
                element: <AdminRoute><ManageUsers/></AdminRoute>
            },
            {
                path: 'manage-classes',
                element: <AdminRoute><ManageClasses/></AdminRoute>
            },
            {
                path: 'my-selected-classes',
                element: <StudentRoute><MySelectedClasses/></StudentRoute>
            },
            {
                path: 'payment/:id',
                element : <StudentRoute><Payment/></StudentRoute>,
                loader : ({params}) => fetch(`${import.meta.env.VITE_BASE_URL}/selected-class/${params.id}`) 
            },
            {
                path: 'my-enrolled-classes',
                element: <StudentRoute><MyEnrolledClasses/></StudentRoute>
            },
            {
                path: 'payment-history',
                element: <StudentRoute><PaymentHistory/></StudentRoute>
            }
        ]
    },
    {
        path : '*',
        element: <ErrorPage/>
    }
])