import { getPostEnergia } from "../model/PostEnergia.js";
import { Router } from "express";
import { dataEnv } from '../config/envData.js';
import bodyParser from "body-parser";

const router = Router();

// router.get('/all_son_orm', async function (req, res) {
//     getPostEnergia.findAll({ attributes: ['IdAmbiental'] })
//         .then(son => {
//             res.send(son)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// });

const son_view = async (req,res) => {
    getPostEnergia.findAll({ attributes: ['IdAmbiental'] })
        .then(son => {
            res.send(son)
        })
        .catch(err => {
            console.log(err)
        })
}

export const postEController = {son_view};