import Dashboard from "./components/Dashboard";
import ErrorBoundary from "./components/ErrorBoundaries";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {

    return <>

        <div className="flex flex-col h-[98vh]">
            <div className="h-[200px] flex justify-center  w-full bg-blue-300">
                <ErrorBoundary>
                    <Navbar />
                </ErrorBoundary>
            </div>

            <div className="flex bg-yellow-300 h-full">
                <aside className="w-[200px] h-full justify-center bg-green-300">
                    <ErrorBoundary>
                        <Sidebar />
                    </ErrorBoundary>
                </aside>

                <div className="">
                    <ErrorBoundary>
                        <Dashboard />
                    </ErrorBoundary>
                </div>


            </div>

            <div className="h-[200px] flex justify-center  w-full bg-red-300">
                <ErrorBoundary>
                    <Footer />
                </ErrorBoundary>
            </div>


        </div>


    </>

}