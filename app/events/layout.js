import Events from "./components/Events";

export default function RootLayout({ children }) {
    return (
      
        <div>
            
            <Events />
            {children}

        </div>
    )
  }