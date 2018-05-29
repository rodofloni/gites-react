import * as React from 'react';
import '../../styles/index.less';

export interface SearchProps {personAmount: number; startDate: string; endDate: string; }

export default class SearchComponent extends React.Component<SearchProps> {

public static defaultProps: Partial<SearchProps> = {
    personAmount: 3,
    startDate: '1-1-2018',
    endDate: '30-12-2018',
  };
  render() {
    return (
        <div className='search-container'>
            <ul className='search-list'>
                <form className='simple_form search__form' id='new_search' action='/home/quick_filter' accept-charset='UTF-8' method='post'><input name='utf8' type='hidden' value='&#x2713;' /><input type='hidden' name='_method' value='put' /><input type='hidden' name='authenticity_token' value='zx3003hU3sX1Dj3dF/fsIut8HyjDFQxc6BvStWAz+24t8C3iZ/xg4IQHwOD/wpMPMhMJXwx2FmD8GgIAfZlSoA==' />
                    <li id='search-list-tab-persons'>
                        <div className='input select optional search_max_persons'><label id='search-label'>Aantal personen</label><select className='select optional select-no-search input--white' data-findex='2' data-placeholder='Selecteer' placeholder='3 personen' name='search[max_persons]' id='search_max_persons'><option value=''></option>
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
                            <option value='21'>Meer dan 20 personen</option></select>
                        </div>
                    </li>
                    <li id='search-list-tab'>
                        <div className='search__col search__col--datepicker'>
                            <div data-react-class='AdhocPeriodPicker' data-react-props='{&quot;startDateSelector&quot;:&quot;.search__form .start input&quot;,&quot;endDateSelector&quot;:&quot;.search__form .end input&quot;,&quot;startDate&quot;:null,&quot;endDate&quot;:null}' className='homepage_datepicker'></div>
                            <div className='start'><div className='input hidden search_start_date'><label id='search-label'>Van: </label><input type='date' name='start-date' /> </div></div>
                        </div>
                    </li>
                    <li id='search-list-tab'>
                        <div className='search__col search__col--datepicker'>
                            <div data-react-class='AdhocPeriodPicker' data-react-props='{&quot;startDateSelector&quot;:&quot;.search__form .start input&quot;,&quot;endDateSelector&quot;:&quot;.search__form .end input&quot;,&quot;startDate&quot;:null,&quot;endDate&quot;:null}' className='homepage_datepicker'></div>
                            <div className='end'><div className='input hidden search_end_date'><label id='search-label'>Tot: </label><input type='date' name='end-date' /> </div></div>
                        </div>
                    </li>
                    <li id='search-list-button'>
                        <div className='search__col search__col--button'>
                            <button name='button' type='submit' className='search-button' data-label='Vind mijn vakantiehuis'> Vind mijn vakantiehuis</button>
                        </div>
                    </li>
                </form>
            </ul>
        </div>
    );
  }
}
