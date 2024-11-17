import Image from "next/image"
import Link from "next/link";
import { DrawerComponent, HowToPlay } from "@/components";
import { categories } from "@/data";

export default function Categories() {
  return (
    <div
      id="categories-page-container"
    >
      <div
        className="categories-container"
      >
        <div
          className="categories-container-title"
        >
          <h1>Who&apos;s that?</h1>
          <p className="xcaliLabsTitle">
              by xcalilabs
              <span>
                <Image src="/beakerIcon.png" alt="icon" width={18} height={18} />
              </span>
            </p>
        </div>

        <div
          className="categories-listing"
        >
          <ul>
            {categories && categories.map((categories, idx) => (
              <li key={idx}>
                <Link
                  href={`/play?category=${categories.type}`}
                  className="content"
                  style={{
                    animationDelay: `${idx === 0 ? 1 : `1.${idx * 2}`}s`, // Apply delay based on index
                  }}
                >
                  {categories.title}
                </Link>
              </li>
            ))}
            
          </ul>

        </div>
      </div>
    </div>
  );
}