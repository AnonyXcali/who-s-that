import Image from "next/image"
import Link from "next/link";
import { DrawerComponent, HowToPlay } from "@/components";

export default function Home() {
  return (
    <div
      id="landing-page-container"
    >
      <div
        className="hero-container"
      >
        <div
          className="hero-container-title"
        >
          <h1>zwenti!</h1>
          <p className="xcaliLabsTitle">
              by xcalilabs
              <span>
                <Image src="/beakerIcon.png" alt="icon" width={18} height={18} />
              </span>
            </p>
        </div>
        <div
          className="hero-container-cta"
        >
          <Link
            href={"/categories"}
            className="play-to-cta"
          >
            Play
          </Link>
          <DrawerComponent
            title="How to Play?"
            drawerTitle="How to play?"
            drawerDescription="Easy to play!"
            customClassName="how-to-play"
            customDrawerTitleClassName="htp-d-title"
            hideDrawerHeader
          >
            <HowToPlay />
          </DrawerComponent>
      </div>
      </div>
    </div>
  );
}