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
  BookOpen
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
        { title: 'Getting Started', path: '/getting-started', icon: <HelpCircle className="h-4 w-4 mr-2" /> }
      ]
    },
    {
      title: 'Features',
      links: [
        { title: 'Products', path: '/products', icon: <ShoppingBag className="h-4 w-4 mr-2" /> },
        { title: 'User Accounts', path: '/user-accounts', icon: <Users className="h-4 w-4 mr-2" /> },
        { title: 'Payment System', path: '/payment-system', icon: <CreditCard className="h-4 w-4 mr-2" /> },
        { title: 'Settings & Config', path: '/settings', icon: <Settings className="h-4 w-4 mr-2" /> }
      ]
    }
  ];
  
  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-30 w-64 bg-background border-r border-border transform transition-transform duration-300 ease-in-out lg:translate-x-0",
      "mt-16", // <-- Décalage vers le bas (taille du header)
      isOpen ? "translate-x-0" : "-translate-x-full",
    )}>
      <div className="flex flex-col h-[calc(100vh-4rem)] py-4"> {/* 4rem = 64px */}
        <div className="space-y-6 flex-1 px-4 overflow-y-auto">
          {mainCategories.map((category, i) => (
            <div key={i} className="py-2">
              <h3 className="text-sm font-medium text-muted-foreground mb-2 px-2 flex items-center">
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
        
        <div className="px-4 py-2 border-t">
          <div className="text-sm text-muted-foreground">
            <p className="mb-1">Last updated: {new Date().toLocaleDateString()}</p>
            <a 
              href="#" 
              className="text-primary hover:underline"
            >
              How to contribute
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
