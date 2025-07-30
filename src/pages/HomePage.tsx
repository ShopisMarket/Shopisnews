import React from 'react';
import { ShoppingBag, Users, CreditCard, Settings, HelpCircle, Zap, Shield } from 'lucide-react';
import FeaturedArticle from '../components/home/FeaturedArticle';
import CategoryCard from '../components/home/CategoryCard';

const HomePage: React.FC = () => {
  const featuredArticles = [
    {
      title: 'Getting Started with Shoppland',
      description: 'A comprehensive guide for new users to start using the Shoppland e-commerce platform.',
      imageSrc: 'https://blog.uber-cdn.com/cdn-cgi/image/width=1536,quality=80,onerror=redirect,format=auto/wp-content/uploads/2022/07/Blog-Image-1.png',
      path: '/getting-started'
    },
    {
      title: 'Product Management Guide',
      description: 'Learn how to effectively manage your product catalog, including adding, editing, and organizing products.',
      imageSrc: 'https://blog.uber-cdn.com/cdn-cgi/image/width=768,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/09/Uber-blog-imagery_Agency.png',
      path: '/products'
    },
    {
      title: 'Payment Processing',
      description: 'Understand how Shoppland handles payments, supported gateways, and security features.',
      imageSrc: 'https://embed-ssl.wistia.com/deliveries/8bfdd3f6880dd7d3876b09ffd61d7072.webp?image_crop_resized=960x540',
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
      title: 'Security & Privacy',
      description: 'Best practices for securing your Shoppland store',
      icon: Shield,
      path: '/security & Privacy',
      articleCount: 9
    }, 
    {
      title: 'Services',
      description: 'Designed to simplify your shopping experience from planning to checkout.',
      icon: ShoppingBag,
      path: '/ServicesPage',
      articleCount: 9
    },
    {
      title: 'Features',
      description: 'Innovative features that make ShoppingListApp the smartest way to shop.',
      icon: Shield,
      path: '/Features',
      articleCount: 9
    },
    {
      title: 'Stats & Advice',
      description: 'Track your shopping habits, gain insights, and discover tips to save money and time.',
      icon: Shield,
      path: '/Stats & Advice',
      articleCount: 9
    },
    {
      title: 'Community Forum',
      description: 'Join our vibrant community of shoppers to share tips, get help, and participate in our food donation initiatives.',
      icon: Shield,
      path: '/Community',
      articleCount: 9
    }
  ];

  return (
    <div>
      <section className="mb-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl font-bold mb-4">ShoppisApp Newsroom</h1>
          <p className="text-lg text-muted-foreground">
            Applcloud de listes de courses multiplateforme. New Updares, tutorials, and best practices.
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
              Shopisnews is a community-driven resource dedicated to new Updates all aspects of the Shopplistapp cross-platform. Our goal is to provide comprehensive, up-to-date information for all users.
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
