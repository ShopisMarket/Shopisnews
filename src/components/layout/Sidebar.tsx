import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import {
  ChevronDown,
  ShoppingBag,
  Home,
  Users,
  CreditCard,
  Settings,
  HelpCircle,
  BookOpen,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();

  const mainCategories = [
    {
      title: 'Main',
      links: [
        { title: 'Home', path: '/', icon: <Home className="h-4 w-4 mr-2" /> },
        { title: 'About Shoppland', path: '/about', icon: <BookOpen className="h-4 w-4 mr-2" /> },
        { title: 'Getting Started', path: '/getting-started', icon: <HelpCircle className="h-4 w-4 mr-2" /> },
      ],
    },
    {
      title: 'Features',
      links: [
        { title: 'Products', path: '/products', icon: <ShoppingBag className="h-4 w-4 mr-2" /> },
        { title: 'User Accounts', path: '/user-accounts', icon: <Users className="h-4 w-4 mr-2" /> },
        { title: 'Payment System', path: '/payment-system', icon: <CreditCard className="h-4 w-4 mr-2" /> },
        { title: 'Settings & Config', path: '/settings', icon: <Settings className="h-4 w-4 mr-2" /> },
      ],
    },
  ];

  return (
    <aside
      className={cn(
        "w-64 bg-background border-r border-border z-20",
        "hidden lg:block", // visible seulement en grand écran
        isOpen && "block absolute left-0 top-0 h-full shadow-lg bg-background"
      )}
    >
      <div className="h-full py-4 overflow-y-auto">
        <div className="space-y-6 px-4">
          {mainCategories.map((category, i) => (
            <div key={i}>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 flex items-center">
                {category.title}
                <ChevronDown className="h-4 w-4 ml-1" />
              </h3>
              <ul className="space-y-1">
                {category.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to={link.path}
                      className={cn(
                        "flex items-center py-2 px-2 text-sm rounded-md",
                        "hover:bg-accent hover:text-accent-foreground",
                        location.pathname === link.path
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-foreground"
                      )}
                    >
                      {link.icon}
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
