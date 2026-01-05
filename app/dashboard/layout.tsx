"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname)
  const tabs = [
    { id: 'overview', label: 'Overview', href: '/dashboard' },
    { id: 'profile', label: 'Profile', href: '/dashboard/profile' },
    { id: 'analytics', label: 'Analytics', href: '/dashboard/analytics' },
    { id: 'settings', label: 'Settings', href: '/dashboard/settings' },
     { id: 'settings', label: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          <nav>
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={tab.href}
                className={`
                  block px-6 py-3 text-sm font-medium transition-colors
                 ${pathname === tab.href || 
                   (tab.id === 'overview' && pathname === '/dashboard')
                    ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
}