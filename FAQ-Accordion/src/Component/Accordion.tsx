import  React  from 'react'

class Accordion extends React.Component<{Question:string, Reponse:string},{ IsClosed:boolean}> {
    constructor(props:any){
        super(props)
        this.state = {
            IsClosed: false
        }
        this.Handleclick = this.Handleclick.bind(this)
    }

    Handleclick(){
        this.setState(prevState => {
            return {IsClosed: !prevState.IsClosed}
        })
    }

    render(): React.ReactNode {
        return (
            <>
                <div className='Accordion'>
                    <div className='QuestionButton'>
                        <p className='Question'>{this.props.Question}</p>
                        <button className='AccordionButton' onClick={this.Handleclick}>{this.state.IsClosed ? "-" : "+"}</button>
                    </div>
                    <p className='Response' style={this.state.IsClosed ? {display: "block"} : {display: "none"}} >{this.props.Reponse}</p>
                </div>
            </>
          )
    }

}

export default Accordion
