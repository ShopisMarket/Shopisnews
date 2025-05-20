import React from 'react';
import { ShoppingBag, Users, CreditCard, Settings, HelpCircle, Zap, Shield } from 'lucide-react';
import FeaturedArticle from '../components/home/FeaturedArticle';
import CategoryCard from '../components/home/CategoryCard';

const HomePage: React.FC = () => {
  const featuredArticles = [
    {
      title: 'Getting Started with Shoppland',
      description: 'A comprehensive guide for new users to start using the Shoppland e-commerce platform.',
      imageSrc: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      path: '/getting-started'
    },
    {
      title: 'Product Management Guide',
      description: 'Learn how to effectively manage your product catalog, including adding, editing, and organizing products.',
      imageSrc: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      path: '/products'
    },
    {
      title: 'Payment Processing',
      description: 'Understand how Shoppland handles payments, supported gateways, and security features.',
      imageSrc: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      path: '/payment-system'
    }
  ];

  const categories = [
    {
      title: 'Products',
      description: 'Manage your product catalog, categories, and inventory',
      icon: ShoppingBag,
      path: '/products',
      articleCount: 12
    },
    {
      title: 'User Accounts',
      description: 'Customer profiles, authentication, and user management',
      icon: Users,
      path: '/user-accounts',
      articleCount: 8
    },
    {
      title: 'Payment System',
      description: 'Payment methods, processing, and transaction management',
      icon: CreditCard,
      path: '/payment-system',
      articleCount: 10
    },
    {
      title: 'Store Configuration',
      description: 'Site settings, theming, and global configuration options',
      icon: Settings,
      path: '/settings',
      articleCount: 7
    },
    {
      title: 'Help & Troubleshooting',
      description: 'Solutions to common issues and customer support',
      icon: HelpCircle, 
      path: '/help',
      articleCount: 15
    },
    {
      title: 'Performance Optimization',
      description: 'Tips and techniques for improving your store performance',
      icon: Zap,
      path: '/performance',
      articleCount: 6
    },
    {
      title: 'Security',
      description: 'Best practices for securing your Shoppland store',
      icon: Shield,
      path: '/security',
      articleCount: 9
    }
  ];

  return (
    <div>
      <section className="mb-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Shoppland Wiki</h1>
          <p className="text-lg text-muted-foreground">
            Your comprehensive guide to the Shoppland e-commerce platform. Find detailed information, tutorials, and best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, i) => (
            <FeaturedArticle key={i} {...article} />
          ))}
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, i) => (
            <CategoryCard key={i} {...category} />
          ))}
        </div>
      </section>
      
      <section className="border-t pt-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold mb-4">About Shoppland Wiki</h2>
            <p className="text-muted-foreground mb-4">
              Shoppland Wiki is a community-driven resource dedicated to documenting all aspects of the Shoppland e-commerce platform. Our goal is to provide comprehensive, up-to-date information for users at all levels.
            </p>
            <p className="text-muted-foreground">
              We welcome contributions from the community. If you'd like to help improve the wiki, please visit our contribution guidelines.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Recent Updates</h2>
            <ul className="space-y-3">
              {[1, 2, 3].map((_, i) => (
                <li key={i} className="border-b pb-3 last:border-0">
                  <a href="#" className="hover:text-primary">
                    Updated Payment Gateway Documentation
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">
                    May {15 - i}, 2025 by Admin
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;