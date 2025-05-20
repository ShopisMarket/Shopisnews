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
        title="About Shoppland" 
        lastModified="May 15, 2025"
        author="Wiki Admin"
      />
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          <TableOfContents items={tocItems} />
          
          <section id="overview" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              Shoppland is a modern e-commerce platform designed to help businesses of all sizes establish and grow their online presence. 
              With a focus on user experience, performance, and flexibility, Shoppland offers a comprehensive solution for creating, 
              managing, and scaling online stores.
            </p>
            <p className="mb-4">
              The platform combines intuitive store management tools with powerful backend systems to deliver a seamless 
              experience for both store owners and their customers. From product catalog management to checkout optimization and 
              analytics, Shoppland provides all the necessary tools for running a successful online business.
            </p>
          </section>
          
          <section id="history" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">History</h2>
            <p className="mb-4">
              Shoppland was founded in 2023 by a team of e-commerce experts and developers who recognized the need for a more 
              user-friendly and flexible online store platform. The initial development focused on creating a solid foundation 
              with essential e-commerce features while ensuring the system was built for extensibility and future growth.
            </p>
            <p className="mb-4">
              The platform officially launched in January 2024 with its core functionality, and has since expanded its feature set 
              and user base. The development roadmap is guided by user feedback and industry trends, with regular updates introducing 
              new capabilities and improvements.
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
              This architecture allows Shoppland to handle stores with thousands of products and high traffic volumes while 
              maintaining excellent performance and user experience.
            </p>
          </section>
          
          <section id="key-features" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <p className="mb-4">
              Shoppland offers a comprehensive set of features designed to meet the needs of modern e-commerce businesses:
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
              Shoppland uses a tiered subscription model with plans designed to accommodate businesses at different stages:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li><strong>Starter</strong>: For small businesses just beginning their e-commerce journey</li>
              <li><strong>Growth</strong>: For established businesses looking to scale</li>
              <li><strong>Enterprise</strong>: For large businesses with complex requirements and high traffic</li>
            </ul>
            <p className="mb-4">
              Each plan includes different levels of features, support, and transaction fee structures. Custom plans are 
              available for businesses with specific requirements.
            </p>
            
            <h3 id="supported-regions" className="text-xl font-medium mt-6 mb-3">Supported Regions</h3>
            <p className="mb-4">
              Shoppland is available globally with specific optimizations for the following regions:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>North America (United States, Canada)</li>
              <li>Europe (EU countries, UK, Switzerland)</li>
              <li>Asia-Pacific (Australia, New Zealand, Singapore, Japan)</li>
              <li>Latin America (Mexico, Brazil, Argentina)</li>
            </ul>
            <p>
              Each region includes localized payment methods, tax calculations, and shipping options.
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
              This approach allows businesses to tailor Shoppland to their specific needs while maintaining compatibility 
              with core platform updates.
            </p>
          </section>
          
          <Categories categories={["Platform", "E-commerce", "Documentation"]} />
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
                  <p className="text-sm">Shoppland Inc.</p>
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
                    Getting Started with Shoppland
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