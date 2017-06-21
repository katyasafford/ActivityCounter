import { PropTypes, Component } from 'react';

const tahoeResorts = [
  'Alpine Meadows',
  'Boreal',
  'Diamond Peak',
  'Donner Ski Ranch',
  'Heavenly',
  'Homewood',
  'Kirkwood',
  'Mt. Rose',
  'Northstar',
  'Squaw Valley',
  'Sugar Bowl'
];

//move this autocomplete class in a diferent file
class Autocomplete extends Component {
  //this method gets value of the ref
  get value() {
    return this.refs.inputResort.value;
  }

  //sets value of the ref
  set value(inputValue) {
    this.refs.inputResort.value = inputValue;
  }

  render() {
    return(
      <div>
        <input ref='inputResort' type='text' list='tahoe-resorts' />
        <datalist id='tahoe-resorts'>
          {this.props.options.map(
            (opt, i) => <option key={i}>{opt}</option>
          )}
        </datalist>
      </div>
    )
  }
}

export const AddDayForm = ({ resort, date, powder, backcountry, onNewDay }) => {
  //need define those so they are in scope
  //and submit() can use them
  let _resort, _date, _powder, _backcountry;

  const submit = (e) => {
    e.preventDefault();
    //this function returns an object with the refs values
    //and since we use it as part of submit(),
    //it needs to be added to props
    onNewDay({
      resort: _resort.value,
      date: _date.value,
      powder: _powder.checked,
      backcountry: _backcountry.checked
    });

    //now after submitting, we reset refs to empty strings
    _resort.value = '';
    _date.value = '';
    _powder.checked = false;
    _backcountry.checked = false;
  }

  return(
    <form className='add-day-form' onSubmit={submit}>
      <label htmlFor='resort'>Resort Name</label>
      <Autocomplete options={tahoeResorts}
            //  can also be set like ref='resort' in ES6 class component,
            //  but in a stateless functional component using callback functions
            //  to see the refs
             ref={input => _resort = input}
      />

      <label htmlFor='date'>Date</label>
      <input id='date'
             type='date'
             defaultValue={date}
             ref={input => _date = input}
             required />

      <div>
        <input id='powder'
               type='checkbox'
               defaultChecked={powder}
               ref={input => _powder = input} />
        <label htmlFor='powder'>Powder Day</label>
      </div>

      <div>
        <input id='backcountry'
               type ='checkbox'
               defaultChecked={backcountry}
               ref={input => _backcountry = input} />
        <label htmlFor='backcountry'>Backcountry Day</label>
      </div>

      <button>Add Day</button>
    </form>
  );
};

AddDayForm.defaultProps = {
  resort: 'Kirkwood',
  date: '2017-02-12',
  powder: true,
  backcountry: false
};

AddDayForm.PropTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool.isRequired,
  backcountry: PropTypes.bool.isRequired
};
