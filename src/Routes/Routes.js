import { createBrowserRouter } from "react-router-dom";
import DownloadPdf from "../Components/DownloadPdf/DownloadPdf";
import PaymentCard from "../Components/PaymentCard/PaymentCard";
import Root from "../Layout/Root";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddPaymentMethod from "../Pages/AddPaymentMethod/AddPaymentMethod";
import AllFlights from "../Pages/AllFlights/AllFlights";
// import BookingDetails from "../Pages/BookingDetails/BookingDetails";
import PackageBookingDetails from "../Pages/BookingDetails/PackageBookingDetails/PackageBookingDetails";
// import PackageBookingInfo from "../Pages/BookingDetails/BookingInfo/BookingInfo";
import ContactUs from "../Pages/ContactUs/ContactUs";
// import DisplayPackage from "../Pages/DisplayPackage/DisplayPackage";
import Facilities from "../Pages/Facilities/Facilities";
// import FavouritesLayout from "../Pages/Favourites/FavouritesLayout";
import FindFlights from "../Pages/FindFlights/FindFlights";
import FindHotel from "../Pages/FindHotels/FindHotel";
import HotelDetails from "../Pages/FindHotels/HotelDetails/HotelDetails";
import HotelListing from "../Pages/FindHotels/HotelListing/HotelListing";
import SearchResult from "../Pages/FindHotels/SearchResult/SearchResult";
// import FindStays from "../Pages/FindHotels/FindStays";
import FlightDetails from "../Pages/FlightDetails/FlightDetails";
// import FlightListing from "../Pages/FlightListing/FlightListing";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import GuideDetails from "../Pages/GuideDetails/GuideDetails";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import PackagesDetails from "../Pages/PackageDetails/PackagesDetails";
import Packages from "../Pages/Packages/Packages";
import SetPassword from "../Pages/SetPassword/SetPassword";
import SignIn from "../Pages/SignIn/SignIn";
import VerifyAccount from "../Pages/VerifyAccount/VerifyAccount";
import PrivateRoutes from "./PrivateRoutes";
import BookingInfo from "../Pages/BookingDetails/BookingInfo/BookingInfo";
import HotelBookingDetails from "../Pages/FindHotels/HotelBookingDetails/HotelBookingDetails";
import UserProfile from "../Pages/Profile/UserProfile";
import FavouriteLayout from "../Layout/FavouriteLayout/FavouriteLayout";
import FavouritePackage from "../Pages/FavouritePackage/FavouritePackage";
import FavouriteFlights from "../Pages/FavouriteFlights/FavouriteFlights";
import FavouriteHotels from "../Pages/FavouriteHotels/FavouriteHotels";
import FlightBookingDetails from "../Pages/FlightDetails/FlightBookingDetails/FlightBookingDetails";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import UserBookings from "../Pages/UserBookings/UserBookings";
import Errorpage from "../Pages/Errorpage/Errorpage";
import RentACar from "../Pages/RentACar/RentACar";
import FindCars from "../Pages/RentACar/FindCars/FindCars";
import CarDetails from "../Pages/RentACar/CarDetials/CarDetails";
// import FavouritesPackages from "../Pages/Favourites/FavouritesPackages/FavouritesPackages";
// import FavouritesHotels from "../Pages/Favourites/FavouritesHotels/FavouritesHotels";
// import FavouritesFlights from "../Pages/Favourites/FavouritesFlights/FavouritesFlights";
// import PrivateRoutes from './PrivateRoutes'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/findFlights",
        element: <FindFlights></FindFlights>,
      },
      {
        path: "/allFlights",
        element: <AllFlights></AllFlights>,
      },
      {
        path: "/flightDetails/:id",
        element: <FlightDetails></FlightDetails>,
        // loader: http://localhost:5000/api/flights/6416b5e2b758fbc5342d890d
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/api/flights/${params.id}`),
      },
      {
        path: "/findHotels",
        element: <FindHotel></FindHotel>,
      },
      {
        path: "/hotel-listing",
        element: <HotelListing></HotelListing>,
      },
      {
        path: "/category/:id",
        element: <HotelDetails></HotelDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/category/search",
        element: <SearchResult></SearchResult>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },

      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/forgotpassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/verify",
        element: <VerifyAccount></VerifyAccount>,
      },
      {
        path: "/setpassword",
        element: <SetPassword></SetPassword>,
      },
      {
        path: "/addpaymentmethod",
        element: <AddPaymentMethod></AddPaymentMethod>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/facilities",
        element: <Facilities></Facilities>,
      },

      {
        path: "/tourGuide/:id",
        element: <GuideDetails></GuideDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/tourGuide/${params.id}`),
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/rentCar",
        element: <RentACar></RentACar>,
      },
      {
        path: "/rentCarServices",
        element: <FindCars> </FindCars>,
      },
      {
        path: "/carDetails/:id",
        element: <CarDetails></CarDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/carServices/${params.id}`),
      },
      {
        path: "/packages",
        element: <Packages></Packages>,
      },
      {
        path: "/profile",
        element: <UserProfile></UserProfile>,
      },

      {
        path: "/packages/:id",
        element: <PackagesDetails></PackagesDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/packages/${params.id}`),
      },
      {
        path: "/PackageBookingDetails/:id",
        element: (
          <PrivateRoutes>
            <PackageBookingDetails></PackageBookingDetails>
          </PrivateRoutes>
        ),
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/packages/${params.id}`),
      },
      {
        path: "/hotelBookingDetails/:id",
        element: (
          <PrivateRoutes>
            <HotelBookingDetails></HotelBookingDetails>
          </PrivateRoutes>
        ),
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/flightBookingDetails/:id",
        element: (
          <PrivateRoutes>
            <FlightBookingDetails></FlightBookingDetails>
          </PrivateRoutes>
        ),
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/api/flights/${params.id}`),
      },
      {
        path: "/bookingInfo",
        element: <BookingInfo></BookingInfo>,
        // loader: async ({ params }) =>
        //   fetch(`http://localhost:5000/bookings/${params.id}`),
      },
      {
        path: "/paymentcard/:id",
        element: <PaymentCard></PaymentCard>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
      {
        path: "/downloadpdf/:id",
        element: <DownloadPdf></DownloadPdf>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
  {
    path: "/favourite",
    element: <FavouriteLayout></FavouriteLayout>,
    children: [
      {
        path: "/favourite/packages",
        element: <FavouritePackage></FavouritePackage>,
      },
      {
        path: "/favourite/packages",
        element: <FavouritePackage></FavouritePackage>,
      },
      {
        path: "/favourite/hotels",
        element: <FavouriteHotels></FavouriteHotels>,
      },
      {
        path: "/favourite/flights",
        element: <FavouriteFlights></FavouriteFlights>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      // {
      //   path: "/dashboard",
      //   element: <AllUsers></AllUsers>,
      // },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbookings",
        element: (
          <AdminRoute>
            <UserBookings></UserBookings>
          </AdminRoute>
        ),
      },
    ],
  },
]);
