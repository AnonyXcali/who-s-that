import Image from "next/image"
import Link from "next/link";
import { DrawerComponent, HowToPlay } from "@/components";
// import { auth } from '@clerk/nextjs/server'

export default async function Home() {
  // const { userId } = await auth()
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

// import { createUserMessage, deleteUserMessage } from '@/lib/action'
// import { db } from '../../db'

// export default async function Home() {
//   const { userId } = await auth()
//   if (!userId) throw new Error('User not found')
//   const existingMessage = await db.query.UserMessages.findFirst({
//     where: (messages, { eq }) => eq(messages.user_id, userId),
//   })

//   return (
//     <main>
//       <h1>Neon + Clerk Example</h1>
//       {existingMessage ? (
//         <div>
//           <p>{existingMessage.message}</p>
//           <form action={deleteUserMessage}>
//             <button>Delete Message</button>
//           </form>
//         </div>
//       ) : (
//         <form action={createUserMessage}>
//           <input type="text" name="message" placeholder="Enter a message" />
//           <button>Save Message</button>
//         </form>
//       )}
//     </main>
//   )
// }