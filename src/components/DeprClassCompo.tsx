import {Component} from 'react';


interface IDeprProps {
    testProps: string;
}
interface IDeprState {
    num: number
    description: string
    inputDataText: string
    inputDataNum: number
}

class DeprClassCompo extends Component<IDeprProps, IDeprState> {
    constructor(props:IDeprProps) {
        super(props)
        this.state = {
            num: 15,
            description: 'some text from local state',
            inputDataText: 'type Some text',
            inputDataNum: 0
        }
    }

    setPlus = () => {
        this.setState(state => ({
            num: state.num + 1  
        }))
    }

    onInputChangeText = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault()
        this.setState({            
            inputDataText: e.currentTarget.value
        })
    }
    onInputChangeNum = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault()
        this.setState({           
            // [e.currentTarget.name]: e.currentTarget.value 
            inputDataNum: +e.currentTarget.value
        })
    }

    render() {
        console.log('rerender')
        const {testProps} = this.props
        const {inputDataText, num, description, inputDataNum} = this.state
        return (
            <div style={{textAlign: 'center'}}>
              <h1 >Hello, I'm Deprecated Class Component! And today we will work with...</h1>
              <h2>Props</h2>
              <p>Our props is - {testProps}</p>

              <h2>State</h2>            
              <p>Our state is - {num} // {description}</p>
              <button onClick={this.setPlus}>Plus</button>
              
              <h2>Form</h2>
              <p>Our input text value is - {inputDataText}</p>
              <p>Our input num value is - {inputDataNum}</p>
              <form>
                  <input type="text" value={inputDataText} onChange={this.onInputChangeText} name='inputDataText'/>
                  <br/>
                  <input type="number" value={inputDataNum} onChange={this.onInputChangeNum} name= 'inputDataNum'/>
              </form>
            </div>
        )
    }
} 

export default DeprClassCompo;