import React from 'react';
import ArticleHeader from '../components/wiki/ArticleHeader';
import TableOfContents from '../components/wiki/TableOfContents';
import InfoBox from '../components/wiki/InfoBox';
import WikiTable from '../components/wiki/WikiTable';
import Categories from '../components/wiki/Categories';

const ProductsPage: React.FC = () => {
  const tocItems = [
    { id: 'introduction', text: 'Introduction', level: 2 },
    { id: 'product-types', text: 'Product Types', level: 2 },
    { id: 'adding-products', text: 'Adding Products', level: 2 },
    { id: 'product-attributes', text: 'Product Attributes', level: 2 },
    { id: 'product-images', text: 'Product Images', level: 3 },
    { id: 'pricing-options', text: 'Pricing Options', level: 3 },
    { id: 'inventory-management', text: 'Inventory Management', level: 2 },
    { id: 'product-categories', text: 'Product Categories', level: 2 },
    { id: 'seo-optimization', text: 'SEO Optimization', level: 2 },
  ];

  const productTypeTable = [
    ['Simple Product', 'Basic product with no variations', 'Most common type, used for single items'],
    ['Variable Product', 'Products with different variations (size, color)', 'Clothing, accessories, configurable items'],
    ['Digital Product', 'Downloadable items without shipping', 'E-books, software, music, digital art'],
    ['Subscription', 'Recurring payment products', 'Membership sites, subscription boxes, services'],
    ['Bundle', 'Collection of products sold together', 'Gift sets, starter packs, complete solutions']
  ];

  return (
    <article>
      <ArticleHeader 
        title="Product Management" 
        lastModified="May 10, 2025"
        author="Product Team"
      />
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          <TableOfContents items={tocItems} />
          
          <section id="introduction" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              Product management is at the core of any e-commerce platform, and Shoppland provides a robust system for creating, 
              organizing, and managing your product catalog. This guide covers everything you need to know about handling products 
              in Shoppland, from basic setup to advanced features.
            </p>
            <p className="mb-4">
              Effective product management involves not just listing items for sale, but creating compelling product pages 
              that convert visitors to customers. Shoppland's product management tools are designed to help you showcase your 
              products in the best possible way while making management efficient and straightforward.
            </p>
          </section>
          
          <section id="product-types" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Product Types</h2>
            <p className="mb-4">
              Shoppland supports multiple product types to accommodate different business needs. Understanding which type to use 
              for your products is essential for proper setup and management.
            </p>
            
            <WikiTable 
              headers={["Type", "Description", "Common Uses"]}
              rows={productTypeTable}
            />
            
            <p className="mt-4">
              Each product type has specific settings and features. Selecting the appropriate type ensures you can take full 
              advantage of Shoppland's capabilities for your particular products.
            </p>
          </section>
          
          <section id="adding-products" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Adding Products</h2>
            <p className="mb-4">
              Adding products to your Shoppland store is a straightforward process. You can add products individually through 
              the admin interface or bulk import them using CSV files.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Individual Product Creation</h3>
            <ol className="list-decimal pl-5 mb-4 space-y-2">
              <li>Navigate to the Products section in your Shoppland dashboard</li>
              <li>Click the "Add New Product" button</li>
              <li>Select the product type from the available options</li>
              <li>Fill in the basic product information (name, description, price)</li>
              <li>Add product images and set inventory levels</li>
              <li>Configure additional options based on the product type</li>
              <li>Save the product</li>
            </ol>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Bulk Import</h3>
            <p className="mb-4">
              For stores with many products, Shoppland offers a bulk import feature:
            </p>
            <ol className="list-decimal pl-5 mb-4 space-y-2">
              <li>Prepare your product data in CSV format using the Shoppland template</li>
              <li>Go to Products &gt; Import in your dashboard</li>
              <li>Upload your CSV file and map the columns</li>
              <li>Review the import preview to ensure data accuracy</li>
              <li>Confirm the import</li>
            </ol>
            <p>
              Bulk import is especially useful when migrating from another platform or when adding a large number of new products.
            </p>
          </section>
          
          <section id="product-attributes" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Product Attributes</h2>
            <p className="mb-4">
              Product attributes help you define the characteristics of your products and create variations. Attributes can include 
              size, color, material, or any other property relevant to your products.
            </p>
            
            <h3 id="product-images" className="text-xl font-medium mt-6 mb-3">Product Images</h3>
            <p className="mb-4">
              High-quality product images are essential for e-commerce success. Shoppland supports multiple images per product, 
              with the following specifications:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Recommended image size: 1200 x 1200 pixels minimum</li>
              <li>Supported formats: JPG, PNG, WebP</li>
              <li>Maximum file size: 5MB per image</li>
              <li>Up to 10 images per product (expandable in higher tier plans)</li>
            </ul>
            <p className="mb-4">
              Shoppland automatically creates different sized thumbnails and optimizes images for web display to ensure fast loading times.
            </p>
            
            <h3 id="pricing-options" className="text-xl font-medium mt-6 mb-3">Pricing Options</h3>
            <p className="mb-4">
              Shoppland offers flexible pricing options to accommodate different business models:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li><strong>Regular Price</strong>: The standard price for the product</li>
              <li><strong>Sale Price</strong>: Discounted price with optional date range for promotions</li>
              <li><strong>Volume Discounts</strong>: Tiered pricing based on quantity purchased</li>
              <li><strong>Customer Group Pricing</strong>: Different prices for different customer segments</li>
              <li><strong>Currency-specific Pricing</strong>: Set prices in multiple currencies</li>
            </ul>
            <p>
              Using these options strategically can help increase conversions and average order value.
            </p>
          </section>
          
          <section id="inventory-management" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Inventory Management</h2>
            <p className="mb-4">
              Effective inventory management is crucial for preventing overselling and backorders. Shoppland provides robust 
              inventory features:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>
                <strong>Stock Tracking</strong>: Monitor current inventory levels for each product and variation
              </li>
              <li>
                <strong>Low Stock Alerts</strong>: Get notifications when inventory falls below specified thresholds
              </li>
              <li>
                <strong>Backorder Management</strong>: Choose how to handle orders when products are out of stock
              </li>
              <li>
                <strong>Reserved Stock</strong>: Temporarily hold inventory for items in customer carts
              </li>
              <li>
                <strong>Multi-location Inventory</strong>: Track stock across multiple warehouses or locations (available in higher tier plans)
              </li>
            </ul>
            <p>
              Regularly reviewing inventory reports helps identify slow-moving products and optimize your purchasing decisions.
            </p>
          </section>
          
          <Categories categories={["Products", "Inventory", "E-commerce", "User Guide"]} />
        </div>
        
        <aside className="md:w-1/4">
          <div className="sticky top-20">
            <InfoBox title="Quick Tips">
              <ul className="space-y-2 text-sm">
                <li>Use high-quality images from multiple angles</li>
                <li>Write detailed, benefit-focused descriptions</li>
                <li>Keep your inventory counts accurate</li>
                <li>Organize products into logical categories</li>
                <li>Include all relevant product specifications</li>
              </ul>
            </InfoBox>
            
            <div className="mt-6 p-4 border rounded-md bg-muted/50">
              <h4 className="text-sm font-medium mb-2">Related Documentation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/product-categories" className="text-sm text-primary hover:underline">
                    Product Categories Guide
                  </a>
                </li>
                <li>
                  <a href="/product-seo" className="text-sm text-primary hover:underline">
                    SEO for Products
                  </a>
                </li>
                <li>
                  <a href="/bulk-import" className="text-sm text-primary hover:underline">
                    Bulk Import/Export Guide
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

export default ProductsPage;