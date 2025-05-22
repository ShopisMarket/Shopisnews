import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Moon, Sun, Menu } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { cn } from '../../lib/utils';
import { ReactComponent as Logo } from '../../.../public/logo-light.svg'; 

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <div className="mr-4 md:hidden">
          <button
            onClick={toggleSidebar}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex items-center">
          <Link 
  to="/" 
  className="flex items-center space-x-2"
>
  <div className="h-8 w-8">
    <img src="/logo-light.svg" alt="shoppinglist logo" />
  </div>
  <span className="hidden md:inline-block font-bold text-xl">ShoppListApp News</span>
</Link>

        </div>
        
        <div className="flex-1 flex justify-end md:justify-center px-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search wiki..."
              className={cn(
                "w-full bg-background pl-8 pr-4 py-2 text-sm rounded-md",
                "border border-input focus:border-primary focus:outline-none",
                "dark:bg-gray-800 dark:border-gray-700"
              )}
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={cn(
              "inline-flex items-center justify-center rounded-md p-2",
              "text-foreground hover:bg-accent hover:text-accent-foreground"
            )}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
