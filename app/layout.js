import "./globals.css";

import Navbar from "./components/Navbar";

export const metadata = {
  title: "PEARL SATELLITE EDUCATIONAL INSTITUTE",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div>
          <Navbar />
          {children}
        </div>
        <footer className="bg-blue-950 flex flex-col space-y-6 items-center p-5 text-white">
          <div className="fotter-deatils ">
            <div className="text-center flex flex-col space-y-3 ">
              <h1 className="text-2xl font-bold">CONTACT US</h1>
              <p className="underline text-[12px] font-mono">
                Round Abouts, Satellite Town Rd, Quetta
              </p>
              <p className="text-[12px]">
                Phone:
                <span className="underline text-[12px]">(081) 2440871</span></p>
              <p className="text-[15px]">
                Copyright 2023 PEARL SATELLITE EDUCATIONAL INSTITUTE | Website by Manzoor
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
