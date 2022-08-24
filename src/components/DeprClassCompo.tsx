import {Component} from 'react';


interface IDeprProps {
    testProps: string;
}
interface IDeprState {
    num: number
    description: string
}

class DeprClassCompo extends Component<IDeprProps, IDeprState> {
    constructor(props:IDeprProps) {
        super(props)
        this.state = {
            num: 15,
            description: 'some text'
        }
    }

    setPlus = () => {
        this.setState(state => ({
            num: state.num + 1  
        }))
    }

    render() {
        const {testProps} = this.props
        return (
            <div style={{textAlign: 'center'}}>
              <h1 >Hello, I'm Deprecated Class Component! And today we will work with local state...</h1>
              <p>Our props is - {testProps}</p>            
              <p>Our state is - {this.state.num}</p>
              <button onClick={this.setPlus}>Plus</button>
            </div>
        )
    }
} 


export default DeprClassCompo;