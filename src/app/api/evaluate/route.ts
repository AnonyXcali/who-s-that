import { NextRequest } from "next/server";
import OpenAI from "openai"

const SYSTEM_ROLE = "system"
const USER_ROLE = "user"

const openai = new OpenAI({
  apiKey: process.env.KEY,
});

export async function POST(request: NextRequest) {
  try {
    const userQuestion = await request.json()
    
    const newQuestions = {
      text: userQuestion.text,
      name: userQuestion.name,
    }

    const SYSTEM_CONTENT = `You are a friendly quiz master assistant hosting a game called 20 questions,
    where users ask you 20 or less yes or no questions whose answer you would give as yes or no, 
    which helps the user to determine a personality that we have thought of.
    So we have thought of a personality named ${newQuestions.name}, now the users would ask you yes or no questions,
    related to the personality ${newQuestions.name}, which they would have to guess by asking 20 yes/no questions or less.
    Your response should be in a json format with keys such as temperature stating hot or cold (basically meaning yes or no).
    Where hot means yes & cold means no, in mandatory double-quotes.
    For example if the personality was born on 1997 and a female, and the user asks "Was she born before 2010?", you would reply
    with a json with temperature as hot.
    If they provide the answer or the sentence contains the answer not necessarily a question or
    an interrogative question, then reply with a json with
    temperature as crown.
    IMPORTANT - Make sure your response is factually correct, its imperative for questions like, Is the person dead?, you cannot be
    wrong here.
    IMPORTANT - If you don't understand a question or If the question is inappropriate, then reply with a json with
    temperature as unknown.
    IMPORTANT - make sure the json is parse-able like "{ temperature: cold }",
    don't add new lines as its breaking the API.`

    const completion = await openai.chat.completions.create({
      messages: [
        { role: SYSTEM_ROLE, content: SYSTEM_CONTENT },
        { role: USER_ROLE, content: newQuestions.text },
      ],
      model: "gpt-4o-mini",
    });

    console.log(completion.choices[0].message.content)

    const res = JSON.parse(completion.choices[0].message.content as string)

    return Response.json({ ...res }, {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    })
  } catch(e) {
    throw new Error(`Error occured ${e}`)
  }
}