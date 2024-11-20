import OpenAI from "openai"
import { personalities, historical, books, sportspersons } from "@/data";
import { getData } from "../../action"

const SYSTEM_ROLE = "system"

const openai = new OpenAI({
  apiKey: process.env.KEY,
})

const getPerson = (type: string) => {
  let randomNumber = 0
  switch(type) {
    case "books":
      randomNumber = Math.floor(Math.random() * books.length);
      return books[randomNumber]
    case "historical":
      randomNumber = Math.floor(Math.random() * historical.length);
      return historical[randomNumber]
    case "sports":
      randomNumber = Math.floor(Math.random() * sportspersons.length);
      return sportspersons[randomNumber]
    case "actors":
    default:
      randomNumber = Math.floor(Math.random() * personalities.length);
      return personalities[randomNumber]
  }
}


export async function GET(request: Request) {
  try {
    const data = await getData()
    console.log(data)

    const { searchParams } = new URL(request.url);

    const type = searchParams.get("type")

    let personality = getPerson(type as string)

    while(!personality) {
      personality = getPerson(type as string)
    }

    const SYSTEM_CONTENT = `You are a friendly hint providing assistant, whose task is to provide hints to users
    helping to identify ${personality}. You will provide them in the format
    of an array of 10 strings, containing 10 hints at max, where each hint progressively becomes easier to determine
    the ${personality}, stored in a json, with a key called hints.
    IMPORTANT - make sure the ${personality} is NO WHERE MENTIONED in the hint,
    IMPORTANT - make sure the ${personality} and their gender are no where mentioned in the hint,
    IMPORTANT - make sure the json is parse-able like "{ hints: [.....]}",
    don't add new lines as its breaking the API.`

    const completion = await openai.chat.completions.create({
      messages: [{ role: SYSTEM_ROLE, content: SYSTEM_CONTENT }],
      model: "gpt-4o-mini",
    });
  
    const response: { hints: Array<string> } = JSON.parse(completion.choices[0].message.content as string)

    const responsePayload = {
      name: personality,
      hints: [...response.hints].slice(0, 5),
    }
      
    return Response.json(responsePayload)
  } catch(e) {
    throw new Error(`Error occured ${e}`)
  }
}

