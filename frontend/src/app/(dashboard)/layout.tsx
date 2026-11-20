/** Authenticated shell. Add the sidebar and topbar from `components/layout` here. */
export default function DashboardLayout({ children }: LayoutProps<"/">) {
  return <div className="flex flex-1 flex-col p-6">{children}</div>;
}
