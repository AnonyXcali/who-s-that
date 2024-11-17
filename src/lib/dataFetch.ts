// import OpenAI from "openai"
// import { personalities } from "@/data";

// const SYSTEM_ROLE = "system"

// // console.log("SERVER BOLTE?", process.env.KEY)

// const openai = new OpenAI({
//   apiKey: process.env.NEXT_PUBLIC_KEY,
// })


// export async function fetchData() {
//   try {
//     const randomNumber = Math.floor(Math.random() * 251);

//     const personality = personalities[randomNumber]

//     const SYSTEM_CONTENT = `You are a friendly hint providing assistant, whose task is to provide hints to users
//     helping to identify ${personality}. You will provide them in the format
//     of an array of 10 strings, containing possible hints in less, stored in a a json, with a key called hints. 
//     IMPORTANT - make sure the json is parse-able like "{ hints: [.....]}",
//     don't add new lines as its breaking the API.`

//     const completion = await openai.chat.completions.create({
//       messages: [{ role: SYSTEM_ROLE, content: SYSTEM_CONTENT }],
//       model: "gpt-4o-mini",
//     });
  
//     const response: { hints: Array<string> } = JSON.parse(completion.choices[0].message.content as string)

//     const responsePayload = {
//       name: personality,
//       hints: [...response.hints],
//     }
      
//     return responsePayload
//   } catch(e) {
//     throw new Error(`Error occured ${e}`)
//   }
// }

export const date = "asd"