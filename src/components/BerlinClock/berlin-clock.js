

import { toBerlinFormat, parseBerlinTime } from '../../common/time';
import Lamp from '../Lamp/lamp';
import './berlin-clock.css';

function BerlinClock({ date }){

    const berlinTime = toBerlinFormat(date);
    const parsedBerlinTime = parseBerlinTime(berlinTime);

    return <div>
                <p>Berlin Time : { berlinTime }</p>
                {/* Second Row */}
                    <div className='bg-black'>
                        <div className='row'>
                            <Lamp color={parsedBerlinTime.seconds} shape="round"/>
                        </div>
                    </div>
                {/* End Second Row */}

                {/* Hours Rows */}
                    <div className='bg-red'>
                        <div className='row'>
                            { parsedBerlinTime.fiveHours.map((h, index) => <Lamp key={index} color={ h } shape="square"/>) }
                        </div>
                        <div className='row'>
                            { parsedBerlinTime.singleHours.map((h, index) => <Lamp key={index} color={ h } shape="square"/>) }
                        </div>
                    </div>
                {/* End Hours Rows */}

                {/* Minutes Rows */}
                    <div className='bg-yellow'>
                        <div className='row'>
                            { parsedBerlinTime.fiveMinutes.map((m, index) => <Lamp key={index} color={ m } shape="rectangle"/>) }
                        </div>
                        <div className='row'>
                            { parsedBerlinTime.singleMinutes.map((m, index) => <Lamp key={index} color={ m } shape="square"/>) }
                        </div>
                    </div>
                {/* End Rows */}
            </div>
}

export default BerlinClock;