import React from 'react';
import ArticleHeader from '../components/wiki/ArticleHeader';
import TableOfContents from '../components/wiki/TableOfContents';
import InfoBox from '../components/wiki/InfoBox';
import WikiTable from '../components/wiki/WikiTable';
import Categories from '../components/wiki/Categories';

const AboutPage: React.FC = () => {
  const tocItems = [
    { id: 'overview', text: 'Overview', level: 2 },
    { id: 'history', text: 'History', level: 2 },
    { id: 'technical-architecture', text: 'Technical Architecture', level: 2 },
    { id: 'key-features', text: 'Key Features', level: 2 },
    { id: 'pricing-model', text: 'Pricing Model', level: 3 },
    { id: 'supported-regions', text: 'Supported Regions', level: 3 },
    { id: 'extensibility', text: 'Extensibility', level: 2 },
  ];

  const versionHistory = [
    ['1.0', 'Initial Release', 'Jan 2024', 'Core e-commerce functionality'],
    ['1.5', 'Feature Update', 'Mar 2024', 'Added multi-currency support and improved checkout'],
    ['2.0', 'Major Release', 'May 2025', 'Complete redesign with enhanced mobile experience']
  ];

  return (
    <article>
      <ArticleHeader 
        title="About Shoppis" 
        lastModified="May 15, 2025"
        author="Wiki Admin"
      />
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          <TableOfContents items={tocItems} />
          
          <section id="overview" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              <strong>Shopis</strong> is a modern smart shopping platform designed to help individuals and families easily manage their grocery lists and optimize everyday shopping.
Focused on simplicity, collaboration, and convenience, <strong>Shopis</strong> offers a seamless solution for creating, organizing, and tracking shopping lists—whether at home or on the go.
            </p>
            <p className="mb-4">
              <strong>Shopis</strong> combines intuitive list and product management tools with powerful backend systems to deliver a seamless experience for both individual users and families. From smart grocery list creation to spending tracking and personalized suggestions, Shopis provides all the essential tools for organizing and optimizing your shopping experience.
            </p>
          </section>
          
          <section id="history" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">History</h2>
            <p className="mb-4">
              <strong>Shopis</strong> was launched in 2025 by a team of developers and everyday shoppers who saw the need for a smarter, more intuitive way to manage grocery shopping. The initial development focused on building a solid foundation with essential list and budget features, while ensuring the platform could evolve to support advanced tools and user needs over time.
            </p>
            <p className="mb-4">
              <strong>Shopis</strong> officially <strong>launched in January 2025</strong> with its core shopping list functionality, and has since grown in both features and user adoption. Its development roadmap is shaped by user feedback and evolving shopping habits, with regular updates that bring new tools, optimizations, and smart grocery management features.
            </p>
            <WikiTable 
              headers={["Version", "Release Type", "Date", "Key Changes"]}
              rows={versionHistory}
            />
          </section>
          
          <section id="technical-architecture" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technical Architecture</h2>
            <p className="mb-4">
              Shoppland is built on a modern tech stack that prioritizes performance, security, and scalability:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Frontend: React.js with a responsive design system for optimal user experience across devices</li>
              <li>Backend: Node.js microservices architecture for flexibility and scalability</li>
              <li>Database: PostgreSQL for reliable, structured data storage with MongoDB for specific use cases</li>
              <li>Search: Elasticsearch integration for fast, relevant product search results</li>
              <li>Caching: Redis for improved performance and reduced database load</li>
              <li>Hosting: Cloud-based infrastructure with auto-scaling capabilities</li>
            </ul>
            <p>
              <strong>This architecture</strong> enables <strong>Shopis</strong> to support thousands of users and extensive shopping data while maintaining smooth performance, real-time syncing, and an intuitive user experience across both web and mobile platforms.
            </p>
          </section>
          
          <section id="key-features" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <p className="mb-4">
              <strong>Shopis Newsroom</strong> offers a comprehensive suite of features tailored to meet the everyday needs of modern grocery and shopping list users, combining convenience, collaboration, and intelligent planning.
            </p>
            
            <h3 id="product-management" className="text-xl font-medium mt-6 mb-3">Product Management</h3>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Flexible product catalog with support for simple and variable products</li>
              <li>Bulk import/export capabilities</li>
              <li>Inventory management with stock tracking</li>
              <li>Product categorization and tagging</li>
              <li>Advanced product search with filtering options</li>
            </ul>
            
            <h3 id="pricing-model" className="text-xl font-medium mt-6 mb-3">Pricing Model</h3>
            <p className="mb-4">
               Shopis uses a flexible subscription model designed to fit different types of users:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li><strong>Basic</strong>: For users who need simple list management and core features</li>
              <li><strong>Plus</strong>: For households and frequent shoppers needing collaboration and smart suggestions</li>
              <li><strong>Premium</strong>: For advanced users looking for automation, personalized offers, and budgeting tools</li>
            </ul>
            <p className="mb-4">
              Each plan includes different levels of features, support, and access to advanced tools like smart planning, analytics, and premium offers. Custom plans are also available for users or partners with specific needs.
            </p>
            
            <h3 id="supported-regions" className="text-xl font-medium mt-6 mb-3">Supported Regions</h3>
            <p className="mb-4">
              Shoppland is available globally with specific optimizations for the following regions:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li><strong>Europe</strong> (EU countries, UK, Switzerland)</li>
              <li><strong>North America</strong> (United States, Canada)</li>
              <li><strong>Asia-Pacific</strong> (Australia, New Zealand, Singapore, Japan)</li>
              <li><strong>Africa</strong> (South Afraca, Kenya, Moroco, Egypt)</li>
              <li><strong>Latin America</strong> (Mexico, Brazil, Argentina)</li>
            </ul>
            <p>
              Each region includes localized payment methods, tax calculations, and service options to provide a smooth and personalized experience tailored to the user's location.
            </p>
          </section>
          
          <section id="extensibility" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Extensibility</h2>
            <p className="mb-4">
              Shoppland was designed with extensibility as a core principle. The platform offers multiple ways to customize 
              and extend functionality:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Plugin ecosystem for adding new features</li>
              <li>Comprehensive API for integrations with external systems</li>
              <li>Webhooks for real-time event notifications</li>
              <li>Theme customization options</li>
              <li>Developer tools and documentation</li>
            </ul>
            <p>
              This approach allows businesses to tailor Shopis to their specific needs while maintaining compatibility with core platform updates.
            </p>
          </section>
          
          <Categories categories={["Platform", "App Updates", "Documentation"]} />
        </div>
        
        <aside className="md:w-1/4">
          <div className="sticky top-20">
            <InfoBox title="Shoppland at a Glance">
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium">Type</h4>
                  <p className="text-sm">E-commerce Platform</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Release Date</h4>
                  <p className="text-sm">January 2024</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Current Version</h4>
                  <p className="text-sm">2.0 (May 2025)</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Developer</h4>
                  <p className="text-sm">Shoppis Inc.</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Website</h4>
                  <a 
                    href="https://shoppland.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    shoppland.netlify.app
                  </a>
                </div>
              </div>
            </InfoBox>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Related Articles</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/getting-started" className="text-sm text-primary hover:underline">
                    Getting Started with ShoppListApp
                  </a>
                </li>
                <li>
                  <a href="/products" className="text-sm text-primary hover:underline">
                    Product Management
                  </a>
                </li>
                <li>
                  <a href="/technical-requirements" className="text-sm text-primary hover:underline">
                    Technical Requirements
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
};

export default AboutPage;
