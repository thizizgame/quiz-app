import { AppSidebar } from "@/components/ui/main/AppSidebar"
import { Header } from "@/components/ui/main/Header"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <SidebarProvider>
                <AppSidebar />
                <main className="pt-[60px] w-screen h-screen flex flex-col bg-secondary">
                    <SidebarTrigger />
                    <div className="m-auto mt-16 w-[856px] border-2 p-4 rounded-lg">{children}</div>
                </main>
            </SidebarProvider>
        </div>

    )
}