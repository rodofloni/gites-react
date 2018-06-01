import * as React from 'react';
import ContentBody from '../components/ContentContainers/ContentBody/ContentBody';
import ContentSpacer from '../components/ContentContainers/ContentSpacer/ContentSpacer';
import ContentTitle from '../components/ContentContainers/ContentTitle/ContentTitle';
import HeaderComponent from '../components/HeaderComponents/HeaderComponent';

export class Demo extends React.PureComponent {
  render() {
    return (
      <body>
        <div>
          <HeaderComponent tab_1={'Vakantiehuizen'} tab_2={'Bed & Breakfast'} tab_3={'Te koop'} tab_4={'Adverteren'} button_login={'Inloggen'}/>
          <ContentSpacer spacerHeight={'50%'}/>
          <ContentTitle titleContent={'Wintersport in Frankrijk'}/>
          <ContentBody
            bodyTitle={'Wintersport in Frankrijk'}
            bodyContent={'Frankrijk heeft meer dan 60 skigebieden en ruim 20.000 kilometer pistes, van uitgestrekte skigebieden met meer dan 600 kilometer geprepareerde pistes tot intiem kleine gebieden met een sleeplift en drie afdelingen. De grootste en bekendste vind je in de Alpen, in de regio’s Provence-Alpes-Côte d’Azur en de Rhône-Alpes. De namen Megèves in de Haute Savoie of Alpes d’Huez in de Isère spreken tot de verbeelding. Minder bekend zijn de skigebieden in de Pyreneeën, maar ze zijn zeker de moeite waard. St. Lary Soulon of Ax Les Therme zijn in het zuiden van Frankrijk en het Noorden van Spanje een begrip. Ook het Centraal Massief kent skimogelijkheden in de regio Auvergne en in het departement de Aveyron. In het Noord Oosten van Frankrijk, in de Lorraine, de Elzas en Franche Comté zijn voor Nederland goed aan te rijden skigebieden. De huizen die je in deze selectie aantreft zijn maximaal 30 kilometer van de pistes verwijderd, maar sommige huizen vind je zelfs op de piste. We hebben in deze selectie geen rekening gehouden met Langlaufen, niet omdat het geen wintersport zou zijn, maar omdat in een veel groter deel van Frankrijk gelanglaufd kan worden, ook zonder dat er pistes zijn. Kijk eens rond in onze verschillende selecties…'} />
        </div>
      </body>

    );
  }
}

// <SearchComponent personAmount={9} startDate={'0-0-2019'} endDate={'12-12-2018'} />
