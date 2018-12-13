import * as moment from 'moment'
import * as React from 'react'
import {connect} from 'react-redux'
import {createEvent} from 'src/store/actions'
import './index.css'

interface IEventDataProps { createEvent:(eventData:IEventDataState)=>void; }
interface IEventDataState { date: string, name: string };

class EventData extends React.Component<IEventDataProps, IEventDataState> {
    constructor(props:any) {
        super(props);
        this.state = {
            date: moment().format('YYYY-MM-DD'),
            name: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.createEvent = this.createEvent.bind(this);
    }

    public render(): React.ReactNode {
        const {name, date} = this.state;
        return (
            <section>
                <form onSubmit={this.createEvent}>
                    <label>Event Name: <input type="text" id="name" value={name} onChange={this.handleChange} /></label>
                    <label>Event Date: <input type="date" id="date" value={date} onChange={this.handleChange} /></label>
                    <input type="submit" value="Create" />
                </form>
            </section>
        )
    }

    private createEvent(event:React.FormEvent<HTMLFormElement>): boolean {
        this.props.createEvent(this.state);
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    private handleChange(event: React.FormEvent<HTMLInputElement>): void {
        this.setState({...this.state, [event.currentTarget.id]: event.currentTarget.value})
    }
}

const mapDispatchToProps = (dispatch:(action:any) => void) => {
    return {
        createEvent: (eventData:IEventDataState) => dispatch(createEvent(eventData.name, eventData.date))
    }
}

export default connect(null, mapDispatchToProps)(EventData);