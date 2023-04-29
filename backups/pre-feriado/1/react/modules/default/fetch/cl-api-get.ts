import { generateSafedata } from "../others/generate-safedata";
import { TResponseClApiGet } from "./types";

export const clApiGet = async (args: { Email: string }): Promise<TResponseClApiGet | null> => {
  try {
    const responseCL = await fetch(`${generateSafedata({ entity: 'CL', type: 'search' })}?email=${args?.Email}&_fields=id,document,birthDate,gender,phone,maritalStatus,comunicationWhatsapp,isNewsletterOptIn,optInWhatsapp,optInEmail,optInSMS`);


    const JSONCL = await responseCL.json();


    const data: TResponseClApiGet = JSONCL

    return data
  } catch (error) {
    console.error("🚀🚀🚀 ", error)

    return null

  }
}
