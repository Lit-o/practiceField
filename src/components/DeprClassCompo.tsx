import {Component} from 'react';


interface IDeprProps {
    testProps: string;
}
interface IDeprState {
    num: number
    description: string
    inputData: string
}

class DeprClassCompo extends Component<IDeprProps, IDeprState> {
    constructor(props:IDeprProps) {
        super(props)
        this.state = {
            num: 15,
            description: 'some text from local state',
            inputData: 'some'
        }
    }

    setPlus = () => {
        this.setState(state => ({
            num: state.num + 1  
        }))
    }

    onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault()
        this.setState({
            inputData: e.currentTarget.value
        })
    }

    render() {
        const {testProps} = this.props
        const {inputData, num, description} = this.state
        return (
            <div style={{textAlign: 'center'}}>
              <h1 >Hello, I'm Deprecated Class Component! And today we will work with local state...</h1>
              <p>Our props is - {testProps}</p>            
              <p>Our state is - {num} // {description}</p>
              <button onClick={this.setPlus}>Plus</button>
              <p>Our input value is - {inputData}</p>
              <form>
                  <input type="text" value={inputData} onChange={this.onInputChange}/>
              </form>
            </div>
        )
    }
} 


export default DeprClassCompo;