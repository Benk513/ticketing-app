import React from 'react'
import { DeleteBlock } from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import StatusDisplay from './StatusDisplay'
import { Mali } from 'next/font/google'

const TicketCard = () => {
    return (
        <div className ="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
            
            <div className="flex mb-3">
                <PriorityDisplay />
                <div className="ml-auto">
            <DeleteBlock />

                </div>
            </div>
            <h4>Ticket Title</h4>
            <hr className="h-px border-0 bg-page mb-2" />
            <p className="whitespace-pre-wrap">This is the ticket description! Please do this ticket</p>
            <div className="flex-grow"></div>
            <div className="flex mt-2">
                <div className="flex flex-col">
                    <p className="text-xs my-1">08/31/23 10:43 PM</p>

            <ProgressDisplay />
                </div>
                <div className="ml-auto flex items-end">

            <StatusDisplay/>
                </div>

            </div>
            
            
        </div>
 
  )
}

export default TicketCard


// rediger cv, lettre de motivcation, prise de parole en pb, comment bien se vetir,
// importance de bien se vetir, pourquoi il faut se vetir, rediger son memoire, rediger un Mail
// rediger des rapports, formations word avancés, formation excels avancés, formation powerBi,
//     formation sage, complet en francais, comment choisir ses chemises, comment bien se tenir, mauvaises positions pour le dos, exercise pour rectifier sa posture, comment avoir une belle peau eclatante, formule naturelle pour belle peau, carotte, gommage, riz, huilles essentielles, astuces decorations, recettes alimentaires, bricolage panneaux solaires, calcul charge batterie domestique, comment cree son jardin a la maison , importance de bien se vetir , bienfaits de la lecture , formation pastisserie , formation comptabilité ,formation economie , formation entrepreneuriat