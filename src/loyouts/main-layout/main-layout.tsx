interface MainLayoutProps {
    children:React.ReactNode
}

export const MainLayout = ({children}:MainLayoutProps) =>(
  <div className="min-h-[100vh] min-w-[100vw] bg-violet-300">{children}</div>
);
