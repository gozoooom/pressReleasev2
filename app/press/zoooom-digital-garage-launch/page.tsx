import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zoooom Unveils Visionary Digital Garage Transforming Car Ownership",
  description: "Zoooom announces the Digital Garage platform and shares its vision for transforming car ownership and P2P transactions.",
  openGraph: {
    title: "Zoooom Unveils Visionary Digital Garage Transforming Car Ownership",
    description: "Zoooom announces the Digital Garage platform and shares its vision for transforming car ownership and P2P transactions.",
    url: "https://newsroom.zoooom.me/press/zoooom-digital-garage-launch",
    images: [
      {
        url: "https://newsroom.zoooom.me/digital-garage-hero.png",
        width: 1200,
        height: 630,
        alt: "Zoooom Digital Garage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoooom Unveils Visionary Digital Garage Transforming Car Ownership",
    description: "Zoooom announces the Digital Garage platform and shares its vision for transforming car ownership and P2P transactions.",
    images: ["https://newsroom.zoooom.me/digital-garage-hero.png"],
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

export default function DigitalGarageLaunchPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Intro */}
      <div className="mb-6">
        <p className="text-gray-800">
          Introducing the industry’s first free and comprehensive end-to-end automotive management platform, empowering car owners with integrated digital management services, trusted peer-to-peer transactions, and streamlined financing solutions.
        </p>
      </div>

      {/* Hero Image */}
      <Image
        src="/digital-garage-hero.png"
        alt="Zoooom platform illustration"
        width={1200}
        height={700}
        className="w-full rounded-lg mb-8 shadow"
        priority
      />

      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Zoooom Unveils Visionary Digital Garage Transforming Car Ownership
      </h1>

      {/* Date */}
      <p className="text-gray-500 mb-8">
        <strong>CYPRESS, CA – July 10, 2025</strong>
      </p>

      {/* Article */}
      <div className="prose max-w-none prose-blue">
        <p>
          Following its successful launch in June, Zoooom, the innovative digital platform poised to revolutionize car ownership and finance, today highlighted its strategic vision for empowering consumers with unparalleled digital solutions and financial accessibility, spearheaded by its newly released Digital Garage. Led by founder and CEO Sheng Wang, Zoooom is rapidly emerging as a compelling new force in the dynamic automotive market.
        </p>
        <br></br>
        <p>
          Sheng Wang, with two decades of leadership across global groups and recent deep automotive experience, offers a unique industry vantage point. His vision for Zoooom arose from observing two key issues: the absence of centralized digital maintenance records for car owners, and a major gap in <strong>trusted peer-to-peer (P2P) car transactions</strong>.
        </p>
        <br></br>
        <p>
          Zoooom fundamentally redefines the car ownership experience by offering a comprehensive, <strong>end-to-end P2P marketplace</strong> that moves far beyond traditional vehicle history reports. Unlike traditional platforms that rely on incomplete or paid data, Zoooom offers its comprehensive suite of services, including the Digital Garage, 100% free to all users, empowering car owners with unparalleled control over their vehicle’s history. Central to this reinvention is <strong>Zoooom’s Innovative Digital Garage.</strong>
        </p>
        <br></br>
        <h2>At launch, Zoooom’s Digital Garage includes:</h2>
        <ul>
          <li>
            <strong>Create and Manage Your Digital Garage:</strong> Easily add vehicles and centralize all records.
          </li>
          <li>
            <strong>Complete Maintenance History:</strong> Upload, store, and access all service records in one place, including vital DIY entries with photo-certified receipts—a capability unmatched by legacy services like Carfax or AutoCheck.
          </li>
          <li>
            <strong>Recall Tracking:</strong> Stay informed with automatic recall alerts specific to your vehicle, enhancing safety and peace of mind.
          </li>
        </ul>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-700">
          “Zoooom is in a different league entirely,” Wang asserts. “We don’t just differ from established legacy services; we fundamentally redefine the landscape. From effortlessly saving all your maintenance records in your Digital Garage to seamlessly closing a sale, we put the car owner at ease and in complete control.”
        </blockquote>
        <h2>Looking ahead, much more is on the horizon for Zoooom.</h2>
        <p>
          Future plans include unleashing predictive data insights for proactive maintenance and personalized car management. Zoooom will also rapidly expand its trusted Zoooom Certified Mechanic Network to offer comprehensive vehicle inspections and verified car conditions, further deepening its integrated financing solutions to simplify auto loans. Additionally, upcoming DMV integration will streamline title transfers, eliminating another major pain point for private parties.
        </p>
        <br></br>
        <p>
          “Zoooom’s mission is to create a holistic, interconnected ecosystem where every aspect of car ownership is simplified, transparent, and empowering,” stated Sheng Wang in conclusion.
        </p>
        <p>
          Zoooom is now available to all car enthusiasts across the United States. To learn more or create your own Digital Garage, visit{" "}
          <a href="https://zoooom.me" className="text-blue-600 underline">
            zoooom.me
          </a>.
        </p>
        <br></br>
        <h2><strong>About Zoooom</strong></h2>
        <p>
          Zoooom is a revolutionary digital platform transforming the car ownership experience. Dedicated to a consumer-first approach, Zoooom provides an unparalleled end-to-end solution for managing, buying, and selling vehicles. Users can securely store all maintenance and service records in a private digital garage, access a trusted marketplace for private party transactions, and benefit from the industry’s largest portfolio of integrated financing options. Visit{" "}
          <a href="https://zoooom.me" className="text-blue-600 underline">
            zoooom.me
          </a>{" "}
          for more information.
        </p>
      </div>

      {/* Contact */}
      <div className="mt-10 text-gray-700">
        <p>
          Contact:{" "}
          <a href="mailto:pr@zoooom.app" className="text-blue-600 underline">
            pr@zoooom.app
          </a>
        </p>
      </div>

      {/* Back link */}
      <div className="mt-8">
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
        >
          Back to Newsroom
        </Link>
      </div>
    </div>
  );
}
