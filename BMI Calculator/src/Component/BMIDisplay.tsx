import  React  from 'react'

class BMIDisplay extends React.Component<{BMI:number},{}> {
    constructor(props:any){
        super(props)
    }


    render(): React.ReactNode {
        return (
            <>
                <h1>Your BMI IS</h1>
                {this.props.BMI}
            </>
          )
    }

}

export default BMIDisplay
