import {Component} from 'react';


interface IDeprProps {
    testProps: string;
}
interface IDeprState {
    data: string
}

class DeprClassCompo extends Component<IDeprProps, IDeprState> {
    constructor(props:IDeprProps) {
        super(props)
        this.state = {
            data: '// Data from local state'
        }
    }
    render() {
        const {testProps} = this.props
        return (
            <div>
              <h1 style={{textAlign: 'center'}}>Hello, I'm Deprecated Class Component! And today we will work with local state...{testProps} {this.state.data}</h1>            
            </div>
        )
    }
} 


export default DeprClassCompo;