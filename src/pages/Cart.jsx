import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { courses, USD_TO_ZAR } from "@/lib/courseData";
import { useCart } from "@/lib/CartContext";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const { cartItems, addCourse, removeCourse, clearCart, itemCount, totalPriceUSD } = useCart();
  const [customer, setCustomer] = useState({ name: "", email: "" });
  const [orderComplete, setOrderComplete] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (event) => {
    event.preventDefault();
    if (!itemCount || !customer.name || !customer.email) return;
    setOrderComplete(true);
    clearCart();
    setCustomer({ name: "", email: "" });
  };

  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <header className="rounded-[2rem] border border-border/40 bg-card/90 p-8 shadow-xl shadow-slate-900/5">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">Checkout Cart</p>
          <div className="mt-4 space-y-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Select a course and complete your checkout</h1>
            <p className="text-base leading-8 text-muted-foreground max-w-3xl">
              Review your selected courses, enter your contact details, and place your order. You can add or remove courses from the cart at any time.
            </p>
          </div>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <section className="space-y-8">
            <div className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Available Courses</h2>
              <div className="mt-6 space-y-5">
                {courses.map((course) => {
                  const inCart = cartItems.some((item) => item.id === course.id);
                  return (
                    <div key={course.id} className="flex flex-col gap-4 rounded-3xl border border-border/50 bg-background/80 p-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">{course.title}</h3>
                        <p className="text-sm text-muted-foreground max-w-2xl">{course.description}</p>
                        <div className="flex flex-wrap gap-3 text-xs font-light text-muted-foreground">
                          <span>{course.duration}</span>
                          <span>{course.category}</span>
                          <span>R {(course.priceUSD * USD_TO_ZAR).toFixed(0)}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button
                          size="sm"
                          variant={inCart ? "outline" : "default"}
                          onClick={() => addCourse(course)}
                          className="text-xs uppercase tracking-widest px-5"
                        >
                          {inCart ? "Added" : "Add to Cart"}
                        </Button>
                        {inCart && (
                          <Button size="sm" variant="ghost" className="text-xs uppercase tracking-widest px-4" onClick={() => removeCourse(course.id)}>
                            Remove
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Your Cart</h2>
              <p className="mt-3 text-sm text-muted-foreground">Selected courses will appear here.</p>
              <div className="mt-6 space-y-4">
                {cartItems.length ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between rounded-3xl bg-background/90 p-4">
                      <div>
                        <p className="font-medium text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground">R {(item.priceUSD * USD_TO_ZAR).toFixed(0)}</p>
                      </div>
                      <Button size="icon" variant="ghost" className="h-9 w-9 text-muted-foreground" onClick={() => removeCourse(item.id)}>
                        ×
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="rounded-3xl border border-dashed border-border/50 bg-background/80 p-6 text-sm text-muted-foreground">
                    No courses selected yet. Add a course to begin checkout.
                  </div>
                )}
              </div>
            </div>
          </section>

          <aside className="space-y-8">
            <div className="sticky top-24 rounded-[2rem] border border-border/30 bg-card/80 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Checkout Summary</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Selected items</span>
                  <span>{itemCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Estimated total</span>
                  <span className="font-semibold text-foreground">R {(totalPriceUSD * USD_TO_ZAR).toFixed(0)}</span>
                </div>
              </div>
              <form onSubmit={handleCheckout} className="mt-8 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground">Full Name</label>
                  <input
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={customer.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="you@example.com"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest px-6 py-3"
                  disabled={!itemCount || !customer.name || !customer.email}
                >
                  Complete Checkout
                </Button>
              </form>
              {orderComplete && (
                <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
                  Thank you! Your checkout is complete and we will send your confirmation details via email.
                </div>
              )}
              <Button type="button" variant="ghost" className="mt-4 w-full text-xs uppercase tracking-widest" onClick={() => navigate('/') }>
                Continue browsing courses
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
