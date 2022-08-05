// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiRequest, NextApiResponse} from "next";
import {players} from "../../index";
import {IPlayer} from "../../../components/player/Player";

export interface ISnipcartPlayer {
    id: string
    name: string
    url: string
    description?: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("playid");
    const {playerId} = req.query;
    const player: IPlayer | undefined = players.find(p => p.id === playerId);
    if (!player) {
        res.status(404).json({});
        return ;
    }
    const snipcartPlayer: ISnipcartPlayer = {...player}

    res.status(200).json(snipcartPlayer);
}