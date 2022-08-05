import {NextApiRequest, NextApiResponse} from "next";
import {players} from "../../index";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("api");
    res.status(200).json(players);
}