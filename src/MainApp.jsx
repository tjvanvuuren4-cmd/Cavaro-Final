import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "@/lib/CartContext";
import CreateProfile from "@/components/CreateProfile";
import React, { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import QuoteModal from "@/components/QuoteModal";
import ProjectAdmin from "./pages/ProjectAdmin";
import Admin from "./pages/Admin";
import PortfolioAdmin from "./pages/PortfolioAdmin";
import PageNotFound from "./lib/PageNotFound";
import Home from "./pages/Home";
import GalleryAdmin from "./pages/GalleryAdmin";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import InvoiceAdmin from "./pages/InvoiceAdmin";
import AdminGuard from "@/components/AdminGuard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AffiliateTermsOfUse from "./pages/AffiliateTermsOfUse";

function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <CartProvider>
      <QueryClientProvider client={queryClientInstance}>
        <CreateProfile />

        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home setQuoteOpen={setQuoteModalOpen} />
              }
            />
            <Route
              path="/admin/invoices"
              element={
            <AdminGuard>
            <InvoiceAdmin />
           </AdminGuard>
              }
            />
            <Route
               path="/admin/gallery"
               element={
           <AdminGuard>
           <GalleryAdmin />
          </AdminGuard>
          }
          />

            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route
              path="/affiliate-terms-of-use"
              element={<AffiliateTermsOfUse />}
            />
            <Route
              path="/admin"
              element={
                <AdminGuard>
                 <Admin />
                </AdminGuard>
             }
           />

            <Route
             path="/admin/portfolio"
             element={
              <AdminGuard>
                <PortfolioAdmin />
              </AdminGuard>
           }
           />

            <Route
              path="/admin/projects"
              element={
               <AdminGuard>
                 <ProjectAdmin />
               </AdminGuard>
              }
           />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>

        <WhatsAppButton />

        <QuoteModal
          open={quoteModalOpen}
          setOpen={setQuoteModalOpen}
        />

        <Toaster />
      </QueryClientProvider>
    </CartProvider>
  );
}

export default App;