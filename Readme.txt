Overview
In this guide you'll get a high-level introduction to React Storefront, what it provides, and the technologies that it uses.

PWA
Apps built with React Storefront are progressive web apps (PWAs) by default. React Storefront automatically provides a service-worker that provides offline browsing and handles caching of both static assets and API calls.

Built on Next.js
React Storefront is built on top of the most widely used framework in the React community, next.js. It follows the standard next.js directory structure and can be deployed to any node.js environment and many serverless environments, such as Layer0 and AWS Lambda.

Server Side Rendering
As with all Next.js apps, server-side rendering is built in. Server-side rendering when combined with caching at edge provides the fastest initial landing experience for your users and ensures your app is search engine friendly.

Material UI
React Storefront's components are built on top of Material UI, the most popular set of UI components in the React Community. React Storefront provides components that are common to many ecommerce apps, such as:

Main Menu
Navigation Tabs
Media Carousel
Accordion
Color Selector
Size Selector
Quantity Selector
Search
... and more!

Built for Speed
React Storefront provides the fastest possible shopping experience by prefetching and caching linked pages before the user navigates to them, providing an "instant back" experience by saving page data in window.history.state so that it does not need to be refetched when the user navigates back.

Built for Scale
React Storefront scales from $10M to $1B+ revenue sites and is currently being used by multiple eCommerce companies on top of the following platforms:

Salesforce Commerce Cloud (formerly Demandware)
Magento
SAP Commerce Cloud (formerly SAP Hybris)
Oracle Commerce (ATG)
HCL Commerce (formerly IBM Websphere Commerce)
Shopify
BigCommerce
... and more!

eCommerce Platform Connectors
Prebuilt eCommerce platform connectors help you get up and running as quickly as possible. The connectors that are currently open source are:

Magento2 Connector
Salesforce Commerce Cloud Connector
More information on connectors can be found in the Connectors guide.
React Storefront makes it easy to prefetch content for linked pages so you can stay one click ahead of your users and provide instant page transitions.

<Link prefetch="visible" href="/p/[productId]" as={product.url}>
  {product.name}
</Link>
Automatic AMP support
React Storefront automatically renders valid AMP pages. Without React Storefront, you need to create two versions of each page - a React version and an AMP version.

API
This guide covers the basics of implementing an API for React Storefront.

Overview
Your React Storefront app is a single page PWA that fetches 
data for each page from a RESTful JSON API. You can either implement 
your own API using Next.js API endpoints in pages/api or connect directly to a headless ecommerce API.

Example Routes
The starter app comes with example endpoints for home,
 subcategory, and product pages located in:

/pages
  /api
    /p
      [productId].js        // Product
    /s
      [subcategoryId].js    // Subcategory
    index.js                // Home Page
These endpoints generate mock data procedurally. 
You will replace them with real data when implementing your app.

App Data and Page Data
API endpoints can be called during server side rendering (when the user initially arrives at your app)
 or when navigating between pages. When rendering on the server, the API must return data for the page 
being displayed (we refer to this as "page data") as well as data required by other shared components such 
as the main menu, navigation, and footer (we refer to this as "app data"). For all navigation that occurs after
 the initial page load, only page data needs to be returned as the content of shared app components usually
 doesn't change. Omitting app data during subsequent minimizes response sizes and eliminates unnecessary work on
 the server. React Storefront provides a function to make this easy:

fulfillAPIRequest
The fulfillAPIRequest function takes the request an an object with addData
 and pageData callbacks. The appData callback is only called during server side rendering.
 It should return a Promise that resolves to the data for shared app components such as the
 main menu, nav, and footer. The pageData callback is called for all requests.


import fulfillAPIRequest from 'react-storefront/props/fulfillAPIRequest'

fulfillAPIRequest(req, {
  appData: () => fetchAppData(),
  pageData: () => fetchPageData()
})
Implementing the API
To learn how to implement APIs for the different parts of your app, 
see the "Pages and Features" section of the guides.

Fetching data from the API in the browser
React Storefront appends ?__v__={__NEXT_DATA__.buildId} to all requests made from the
 browser using window.fetch and XMLHttpRequest. This ensures that cached results
 requested by a previous version of the application are not served to the current 
version of the application and thus prevents errors when you introduce breaking changes in your API.
Routing
Layer0 adds powerful routing capabilities beyond what Next.js provides.
 By deploying your React Storefront app on Layer0 you can:
Proxy URLs from additional upstream sites
Send redirects from the network edge
Handle URLs that do not follow Next.js conventions such as "vanity" URLs used for SEO.
Fall back to Next.js standard routing for unmatched requests
Configuration
To define routes for Layer0, create a routes.js file in the root of your project. 
You can override the default path to the router by setting the routes key in layer0.config.js.

The routes.js file should export an instance of @layer0/core/Router:

// routes.js
const { Router } = require('@layer0/core/router')

module.exports = new Router()
Declaring Routes
Layer0 provides direct support for Next.js applications through the @layer0/next package, 
which provides a nextRoutes middleware that automatically adds all Next.js page routes to the router:

const { Router } = require('@layer0/core/router')
const { nextRoutes } = require('@layer0/next')

module.exports = new Router().use(nextRoutes)
Cache responses by using the cache function in routes for specific pages:

const { Router } = require('@xdn/core/router')
const { nextRoutes } = require('@xdn/next')
module.exports = new Router()
  .get('/', ({ cache }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60 * 24, // cache the home page for 24 hours
      },
    })
  })
  .get('/p/:productId', ({ cache }) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60, // cache product pages for 1 hour
      },
    })
  })
  .use(nextRoutes)
Proxying Unhandled URLs to a Legacy Experience
Layer0 makes it easy to proxy URLs not handled by your PWA to a legacy experience. 
To do so, define a legacy backend in xdn.config.js:

require('dotenv').config()

module.exports = {
  backends: {
    legacy: {
      domainOrIp: process.env.LEGACY_BACKEND_DOMAIN || 'legacy.my-site.com',
      hostHeader: process.env.LEGACY_BACKEND_HOST_HEADER || 'legacy.my-site.com',
    },
  },
}
Then add a fallback route that sends unhandled traffic to the legacy experience:

module.exports = new Router()
  // ...
  .use(nextRoutes)
  .fallback(({ proxy }) => proxy('legacy'))
Complete Routing Guide
Complete to Routing on Layer0

