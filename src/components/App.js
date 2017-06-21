import { Component } from 'react';
import { SkiDayList } from './SkiDayList';
import { SkiDayCount } from './SkiDayCount';
import { AddDayForm } from './AddDayForm';
import { Menu } from './Menu';

//this component renders SkiDayList and SkiDayCount
export class App extends Component {
  //declare initial state in ES6 component
  constructor(props) {
    super(props);
    this.state = {
      allSkiDays: [
        {
          resort: 'Squaw Valley',
          date: '2016-01-02',
          powder: true,
          backcountry: false
        }
      ]
    }
    this.addDay = this.addDay.bind(this);
  }

  addDay(newDay) {
    this.setState({
      allSkiDays: [
        ...this.state.allSkiDays,
        newDay
      ]
    })
  }

 //re-write this function using ES6 and maybe in a better way
  countDays(filter) {
    return this.state.allSkiDays.filter(function(day) {
      if (filter) {
        return day[filter]
      }
      else {
        return day
      }
    }).length
  }

  render() {
    return(
      <div className='app'>
        <Menu />
        {
          (this.props.location.pathname === '/') ?
            <SkiDayCount total={this.countDays()}
                         powder={this.countDays('powder')}
                         backcountry={this.countDays('backcountry')}
            /> :
          (this.props.location.pathname === '/add-day') ?
            <AddDayForm onNewDay={this.addDay} /> :
            <SkiDayList days={this.state.allSkiDays}
                        filter={this.props.params.filter}
            />
        }
      </div>
    )
  }
};
