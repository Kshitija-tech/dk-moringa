import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function DKManufacturers() {
  return (
    <div className="bg-white text-green-900 font-sans">
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-50 to-white px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-light mb-2">
          Pure <span className="font-semibold">Morning</span>, Pure <span className="font-semibold">Moringa</span>
        </h1>
        <motion.div
          animate={{ opacity: [1, 0.5, 1], y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xl mt-2 text-green-700"
        >
          DK Manufacturers’ <span className="italic">moringa</span> → <span className="italic">morning</span> ↺
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-semibold mb-6">About</h2>
        <p className="text-lg leading-relaxed">
          At DK Manufacturers, we bring you nature’s most powerful plant in its purest form. Sustainably harvested and minimally processed, our moringa powder is your new morning ritual—rich in nutrients, rooted in tradition.
        </p>
      </section>

      <section className="bg-green-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">Benefits</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <li>✓ Boosts energy and focus</li>
            <li>✓ Supports skin health</li>
            <li>✓ Rich in iron and antioxidants</li>
            <li>✓ Naturally detoxifying</li>
          </ul>
        </div>
      </section>

      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6">Sourcing</h2>
        <p className="text-lg leading-relaxed">
          Our moringa is ethically grown by women-led cooperatives in East Africa. Every batch is hand-harvested and sun-dried to preserve its potency and purity.
        </p>
      </section>

      <section className="bg-green-100 py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Stay Rooted</h2>
        <p className="mb-6 text-lg">Join our journal for wellness rituals, moringa recipes, and exclusive offers.</p>
        <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
          <Input type="email" placeholder="Your email" className="bg-white text-green-900" />
          <Button className="bg-green-700 text-white hover:bg-green-800">Subscribe</Button>
        </div>
      </section>

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-8 text-center">Journal</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card><CardContent className="p-4"><h3 className="text-xl font-medium mb-2">Morning Moringa Smoothie</h3><p className="text-sm text-gray-600">A green start that tastes like sunshine.</p></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-xl font-medium mb-2">The Ritual of Green</h3><p className="text-sm text-gray-600">Moringa as your daily grounding practice.</p></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-xl font-medium mb-2">From Soil to Sip</h3><p className="text-sm text-gray-600">Behind our ethical sourcing story.</p></CardContent></Card>
        </div>
      </section>

      <section className="bg-green-50 py-20 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-2">hello@dkmoringa.com</p>
        <p>Follow us on Instagram @dkmoringa</p>
      </section>
    </div>
  );
}