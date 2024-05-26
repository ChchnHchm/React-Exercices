import  React  from 'react'
import BMICalculation from './BMICalculation'
import BMIDisplay from './BMIDisplay'

class BMI extends React.Component<{},{}> {
    constructor(props:any){
        super(props)
    }


    render(): React.ReactNode {
        return (
            <>
                <BMICalculation/>
                <BMIDisplay BMI={23}/>
            </>
          )
    }

}

export default BMI
