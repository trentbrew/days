import { AppSidebar } from '@/components/app-sidebar';
import {
  SidebarInset,
  SidebarProvider,
} from '@workspace/ui/components/sidebar';
import { AgentSidebar } from '@/components/agent-sidebar';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <SidebarInset>
          <Header />
          <main className="flex flex-1 flex-col p-0">{children}</main>
        </SidebarInset>
        {/* <Footer /> */}
      </SidebarProvider>
    </div>
  );
}
