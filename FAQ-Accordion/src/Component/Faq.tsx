import  React  from 'react'
import { questions } from '../Data/Question'
import Accordion from './Accordion'
class Faq extends React.Component {
    questionsList = questions.map((question:any) => <Accordion key={question.id} Question={question.title} Reponse={question.info}/> )
    constructor(props:any){
        super(props)
    }


    render(): React.ReactNode {
        return (
            <>
                <div className='FAQ'>
                    <p>Frequently Asked Questions</p>
                    {this.questionsList}
                </div>
            </>
          )
    }

}

export default Faq
