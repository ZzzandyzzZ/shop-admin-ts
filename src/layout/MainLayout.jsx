// import Header from "@components/Header";
// import Nav from "@common/Nav";

import Header from '@components/Header';
import Navbar from '@components/Navbar';

export default function MainLayout({children}) {
    return(
        <>
        <div className="min-h-full">
            <Header/>
            <Navbar />
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6">
                    {children}
                </div>
            </main>
        </div>
        </>
    )
};