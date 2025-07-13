import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoooom Newsroom",
  description: "Zoooom Accelerates Automotive Market Transformation with its Digital Garage and Visionary End-to-End Car Ownership Platform.",
  openGraph: {
    title: "Zoooom Newsroom",
    description: "Zoooom Accelerates Automotive Market Transformation with its Digital Garage and Visionary End-to-End Car Ownership Platform.",
    url: "https://newsroom.zoooom.me",
    siteName: "Zoooom Newsroom",
    images: [
      {
        url: "https://newsroom.zoooom.me/hero-press-release.png",
        width: 1200,
        height: 630,
        alt: "Zoooom Digital Garage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoooom Newsroom",
    description: "Zoooom Accelerates Automotive Market Transformation with its Digital Garage and Visionary End-to-End Car Ownership Platform.",
    images: ["https://newsroom.zoooom.me/hero-press-release.png"],
  },
  keywords: [
    "Zoooom",
    "automotive",
    "digital garage",
    "car ownership",
    "vehicle management",
    "car maintenance",
    "peer-to-peer marketplace",
    "private party car sales",
    "automotive",
    "auto finance",
    "car service",
    "car maintenance",
    "maintenance records",
    "vehicle history",
    "p2p car sales",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="flex justify-center">
        <Image
          src="/hero-press-release.png"
          alt="Zoooom Digital Garage"
          width={600}
          height={400}
          className="rounded shadow-lg"
          priority
        />
      </div>
      <div>
        <span className="uppercase text-gray-500 text-sm">Product</span>
        <h1 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
          Zoooom Accelerates Automotive Market Transformation with its Digital Garage and Visionary End-to-End Car Ownership Platform
        </h1>
        <br></br>
        <p className="text-gray-700 mb-6">
          Introducing the industry's first free and comprehensive end-to-end automotive management platform, empowering car owners with integrated digital management services, trusted peer-to-peer transactions, and streamlined financing solutions.
        </p>
        <Link href="/press/zoooom-digital-garage-launch">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Read More
          </button>
        </Link>
      </div>
    </main>
  );
}
