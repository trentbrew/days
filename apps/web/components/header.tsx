import { Separator } from '@workspace/ui/components/separator';
import { DynamicBreadcrumb } from '@/components/dynamic-breadcrumb';
import { SidebarTrigger } from '@workspace/ui/components/sidebar';

export const Header = () => {
  return (
    <header className="bg-sidebar/50 backdrop-blur-xl z-50 sticky top-0 border-b border-border flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <DynamicBreadcrumb />
      </div>
    </header>
  );
};
