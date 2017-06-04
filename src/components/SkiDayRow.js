import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';

export const SkiDayRow = ({resort, date, powder, backcountry}) => (
  <tr>
    <td>
      {/* use +1 because we want Jan to be 1, not 0 */}
      {date.getMonth()+1}/
      {date.getDate()}/
      {date.getFullYear()}
    </td>
    <td>
      {resort}
    </td>
    <td>
      {(powder) ? <SnowFlake /> : null}
    </td>
    <td>
      {(backcountry) ? <Terrain /> : null}
    </td>
  </tr>
);
