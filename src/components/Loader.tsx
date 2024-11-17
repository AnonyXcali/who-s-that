import Image from "next/image"
import Link from "next/link";
import { DrawerComponent, HowToPlay } from "@/components";

export default function Loader() {
  return (
    <div
      id="loading-page-container"
    >
      <div
        className="loading-container"
      >
        <div
          className="loading-container-title"
        >
          <h1>Who&apos;s that?</h1>
          <p className="xcaliLabsTitle">
              by xcalilabs
              <span>
                <Image src="/beakerIcon.png" alt="icon" width={18} height={18} />
              </span>
            </p>
        </div>
      </div>
    </div>
  );
}