import React from 'react';

// import { NavBar } from 'modules/components';

interface MainLayoutProps {
    children: React.ReactNode;
    darkMode?: boolean;
}

// style = {{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)" }}

const MainLayout: React.FC<MainLayoutProps> = ({ children, darkMode }) => {
    return (
        <div style={{ backgroundColor: darkMode ? "#333" : undefined }}>
            {/* <NavBar /> */}
            <div style={{ padding: "2rem", backgroundColor: darkMode ? "#333" : undefined }}>
                {children}
            </div>
        </div>
    )
}

export default MainLayout;