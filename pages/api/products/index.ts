import {NextApiRequest, NextApiResponse} from "next";
import {products} from "../../index";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("1111NextApiResponse");
    res.status(200).json(products);
}