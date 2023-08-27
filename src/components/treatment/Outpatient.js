import React from 'react'
import "./Outpatient.css"
import { FaCheck } from 'react-icons/fa';
import TreatmentImage2 from '../../assets/treatment-2.jpg'

const Outpatient = () => {
  return (
    <>

        <div className='outpatient'>
            <div className='outpatient-header container'>
                <h1>OUTPATIENT PROGRAMS</h1>
            </div>

            <div className='outpatient-content container'>

                <div  className='outpatient-left'>
                    <img src={TreatmentImage2} alt="Conselling Session with a patient" loading="lazy" />
                </div>

                <div className='outpatient-right'>

                    <h1>PHP (Mental Health and Addiction)</h1>

                    <ul>
                    <li> <FaCheck className='star'/>  A more intense, comprehensive treatment approach than IOP, available every day of the week.</li>
                    <li> <FaCheck className='star'/> For those with families and responsibilities at home who seek ongoing treatment. 
                    </li>
                    <li> <FaCheck className='star'/>   Spend your days in recovery with our team your nights at home.
                    </li>
                    <li> <FaCheck className='star'/> One-on-one support available as needed. 
                    </li>
                    </ul>

                    <h1>IOP (Mental Health and Addiction)</h1>

                    <ul>
                    <li> <FaCheck className='star'/> Several hours of group therapy each day along with continued, personalized support and careful monitoring by our in-house physicians.</li>
                    <li> <FaCheck className='star'/> Take part in our unique jobs program. We equip you with all the tools you need to succeed in finding the right job.</li>
                    </ul>

                    <h1>OP (Mental Health and Addiction)</h1>

                    <ul>
                    <li> <FaCheck className='star'/> Get continued support as needed with our outpatient programs.</li>
                    <li> <FaCheck className='star'/> Attend weekly group and counseling as you move back to your normal life.
                    </li>
                    </ul>
                </div>


            </div> 

        </div>

    </>
  )
}

export default Outpatient