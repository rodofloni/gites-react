import * as React from 'react';
import '../../styles/index.less';

// Defining the interface.
export interface SearchProps {vacationType: string; }

export default class SearchComponent extends React.Component<SearchProps> {
public personAmount: string = '0 personen';

public dateFormat(date: string): string {
    const values = date.split('-', 3);
    const y: string = values[0];
    const m: string = values[1];
    const d: string = values[2];
    return(d + '-' + m + '-' + y);
  }

// Defining the default props.
public static defaultProps: Partial<SearchProps> = {
    vacationType: 'Zomervakantie',
  };

  onComponentClick(): void {
    const personAmount: string = (document.getElementById('search-max-persons') as HTMLInputElement).value;
    const dateStart: string = (document.getElementById('search-list-date-from') as HTMLInputElement).value;
    const dateEnd: string = (document.getElementById('search-list-date-till') as HTMLInputElement).value;
    const webString = 'https://www.gites.nl/vakantiehuizen/' + this.props.vacationType + '?max_persons=' + personAmount + '&start_date=' + this.dateFormat(dateStart) + '&end_date=' + this.dateFormat(dateEnd);
    // tslint:disable-next-line:no-console
    console.log(webString);
    // tslint:disable-next-line:no-console
    console.log('https://www.gites.nl/vakantiehuizen/wintersport?max_persons=4&start_date=20-06-2005&end_date=20-06-2012');

    window.location.assign(webString);

    // vakantiehuizen?end_date=09-06-2018&max_persons=3&start_date=04-06-2018#
    // https://www.gites.nl/vakantiehuizen/wintersport?max_persons=4&start_date=20-06-2005&end_date=20-06-2012
  }
  render() {
    return (
        <div className='search-container'>
            <ul className='search-list'>
                <form className='simple_form search__form' id='new_search' action='/home/quick_filter' accept-charset='UTF-8' method='post'><input name='utf8' type='hidden' value='&#x2713;' /><input type='hidden' name='_method' value='put' /><input type='hidden' name='authenticity_token' value='zx3003hU3sX1Dj3dF/fsIut8HyjDFQxc6BvStWAz+24t8C3iZ/xg4IQHwOD/wpMPMhMJXwx2FmD8GgIAfZlSoA==' />
                    <li id='search-list-tab-persons'>
                        <div className='input select optional search_max_persons'><label id='search-label'>Aantal personen</label>
                            <select className='select optional select-no-search input--white' data-findex='2' data-placeholder='Selecteer' placeholder= '3 personen' name='search[max_persons]' id='search-max-persons'><option value='0'> 0 personen </option>
                                <option value='1'>1 persoon</option>
                                <option value='2'>2 personen</option>
                                <option value='3'>3 personen</option>
                                <option value='4'>4 personen</option>
                                <option value='5'>5 personen</option>
                                <option value='6'>6 personen</option>
                                <option value='7'>7 personen</option>
                                <option value='8'>8 personen</option>
                                <option value='9'>9 personen</option>
                                <option value='10'>10 personen</option>
                                <option value='11'>11 personen</option>
                                <option value='12'>12 personen</option>
                                <option value='13'>13 personen</option>
                                <option value='14'>14 personen</option>
                                <option value='15'>15 personen</option>
                                <option value='16'>16 personen</option>
                                <option value='17'>17 personen</option>
                                <option value='18'>18 personen</option>
                                <option value='19'>19 personen</option>
                                <option value='20'>20 personen</option>
                                <option value='21'>Meer dan 20 personen</option>
                            </select>
                        </div>
                    </li>
                    <li id='search-list-tab'>
                        <div className='search-list-date'>
                            <div data-react-class='AdhocPeriodPicker' data-react-props='{&quot;startDateSelector&quot;:&quot;.search__form .start input&quot;,&quot;endDateSelector&quot;:&quot;.search__form .end input&quot;,&quot;startDate&quot;:null,&quot;endDate&quot;:null}' className='homepage_datepicker'></div>
                            <div className='start'><div className='input hidden search_start_date'><label id='search-label'>Van: </label><input id='search-list-date-from' type='date' name='start-date' /> </div></div>
                        </div>
                    </li>
                    <li id='search-list-tab'>
                        <div className='search-list-date'>
                            <div data-react-class='AdhocPeriodPicker' data-react-props='{&quot;startDateSelector&quot;:&quot;.search__form .start input&quot;,&quot;endDateSelector&quot;:&quot;.search__form .end input&quot;,&quot;startDate&quot;:null,&quot;endDate&quot;:null}' className='homepage_datepicker'></div>
                            <div className='end'><div className='input hidden search_end_date'><label id='search-label'>Tot: </label><input id='search-list-date-till' type='date' name='end-date' /> </div></div>
                        </div>
                    </li>
                    <li id='search-list-button'>
                        <div className='search-list-button-submit'>
                            <button onClick = { () => this.onComponentClick() } name='button' type='button' className='search-button' data-label='Vind mijn vakantiehuis'> <p id='search-list-button-text'>  Vind mijn vakantiehuis </p> </button>
                        </div>
                    </li>
                </form>
            </ul>
        </div>
    );
  }
}
