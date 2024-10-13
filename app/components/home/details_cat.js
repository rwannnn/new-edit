import Image from "next/image";
import Link from "next/link";

export default function Details() {
  return (
    <>
      {/* Header Section */}
      <div className="header bg-black p-4">
        <Link href="#" className="text-white">
          gggggg
        </Link>
      </div>

      {/* Image Section */}
      <div className="content p-4">
        <Image
          src="/your-image-path.jpg" // Update with the correct image path
          alt="Descriptive Alt Text"
          width={500}
          height={300}
        />
      </div>

      {/* Icon and Label Section */}
      <div className="bg-peach p-8">
        <div className="flex justify-center space-x-16">
          {/* Cleaning */}
          <div className="flex flex-col items-center">
            <Image
              src="/path-to-cleaning-icon.png" // Update with your cleaning icon path
              alt="Cleaning"
              width={50}
              height={50}
            />
            <p className="mt-2 text-lg font-semibold">Cleaning</p>
          </div>

          {/* Painting */}
          <div className="flex flex-col items-center">
            <Image
              src="/path-to-painting-icon.png" // Update with your painting icon path
              alt="Painting"
              width={50}
              height={50}
            />
            <p className="mt-2 text-lg font-semibold">Painting</p>
          </div>

          {/* Electrical */}
          <div className="flex flex-col items-center">
            <Image
              src="/path-to-electrical-icon.png" // Update with your electrical icon path
              alt="Electrical"
              width={50}
              height={50}
            />
            <p className="mt-2 text-lg font-semibold">Electrical</p>
          </div>

          {/* Home Repairs */}
          <div className="flex flex-col items-center">
            <Image
              src="/path-to-home-repairs-icon.png" // Update with your home repairs icon path
              alt="Home Repairs"
              width={50}
              height={50}
            />
            <p className="mt-2 text-lg font-semibold">Home Repairs</p>
          </div>

          {/* Moving */}
          <div className="flex flex-col items-center">
            <Image
              src="/path-to-moving-icon.png" // Update with your moving icon path
              alt="Moving"
              width={50}
              height={50}
            />
            <p className="mt-2 text-lg font-semibold">Moving</p>
          </div>
        </div>
      </div>
    </>
  );
}
