import React from 'react'

class CustomErrorBoundary extends React.Component {
    constructor(props){
        super(props)
        this.state = {hasError : false};
    }

    static getDerivedStateFromError(error){
        return { hasError : true}
    }

    componentDidCatch(error, errorInfo){

        console.log("Logging the error", error, errorInfo)
    }

    render(){
        
        if(this.state.hasError){
            return <div>Error Occured</div>
            
        }

        return this.props.children


    }


}

export default CustomErrorBoundary;