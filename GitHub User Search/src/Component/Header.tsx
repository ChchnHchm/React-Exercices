import  React  from 'react'

class Header extends React.Component {
    constructor(props:any){
        super(props)
    }


    render(): React.ReactNode {
        return (
            <>
            <header>
                <p>GitHub User Search</p>
            </header>
            </>
          )
    }

}

export default Header
