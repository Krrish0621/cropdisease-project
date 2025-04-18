import Link from "next/link"
import { List, Search, Store } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-auto">
      {/* Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            CropVista
          </Link>
          <nav className="space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/marketplace" className="text-gray-600 hover:text-gray-900">
              Marketplace
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Hero Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Revolutionize Your Crop Health</h1>
            <p className="text-gray-600 mb-8">
              Our AI-powered crop disease prediction and management platform helps you identify and address issues
              before they become problems.
            </p>
            <div className="flex space-x-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded">Get Started</button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Upload Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Upload Image</h2>
            <p className="text-gray-600 mb-6">Detect crop diseases by uploading an image.</p>

            {/* Sample uploaded image */}
            <div className="mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-16%20194657-JhmEvZv5XrfkVc1op37IphCoVlBq8t.png"
                alt="Crop disease sample"
                width={400}
                height={200}
                className="w-full h-auto rounded-lg"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-4 mx-auto block">
                Upload Another Image
              </button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="bg-green-50 p-4 rounded-full mb-4">
              <Search className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Accurate Diagnosis</h3>
            <p className="text-gray-600 mb-4">
              Our advanced AI models can accurately identify crop diseases from uploaded images.
            </p>
            <Link href="#" className="text-green-500 hover:text-green-600 mt-auto">
              Learn More
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="bg-green-50 p-4 rounded-full mb-4">
              <List className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Personalized Recommendations</h3>
            <p className="text-gray-600 mb-4">Get detailed management recommendations for identified crop diseases.</p>
            <Link href="#" className="text-green-500 hover:text-green-600 mt-auto">
              Learn More
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="bg-green-50 p-4 rounded-full mb-4">
              <Store className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Marketplace Integration</h3>
            <p className="text-gray-600 mb-4">
              Discover and purchase high-quality crop supplements to address specific issues.
            </p>
            <Link href="#" className="text-green-500 hover:text-green-600 mt-auto">
              Visit Marketplace
            </Link>
          </div>
        </div>

        {/* Crop Supplement Marketplace Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Crop Supplement Marketplace</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fungicide for Powdery Mildew</h3>
              <p className="text-gray-600 mb-6">Organic fungicide to treat powdery mildew on crops.</p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-auto">Buy Now</button>
            </div>

            {/* Product 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Insecticide for Aphids</h3>
              <p className="text-gray-600 mb-6">Natural insecticide to control aphid infestations.</p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-auto">Buy Now</button>
            </div>

            {/* Product 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fertilizer for Nutrient Deficiency</h3>
              <p className="text-gray-600 mb-6">Balanced fertilizer to address nutrient deficiencies.</p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-auto">Buy Now</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
