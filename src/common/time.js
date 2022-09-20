
/**
 * Extract date hours, minutes, seconds
 * 
 * @param Date date 
 * @returns 
 */
function parseDate(date){
    return {
        hours: date.getHours(), minutes: date.getMinutes(), seconds: date.getSeconds()
    }
}

/**
 * format Date object to berlin clock 
 * @param Date date 
 * @returns string
 */
export function toBerlinFormat(date){
    return `${ getSecond(date) }${ getFiveHours(date) }${ getSingleHours(date) }${ getFiveMinutes(date) }${ getSingleMutes(date) }`
}

export function toNumericFormat(date) {
    const parsedDate = parseDate(date);
    return `${ String(parsedDate.hours).padStart(2, '0') }:${ String(parsedDate.minutes).padStart(2, '0')}:${ String(parsedDate.seconds).padStart(2, '0')}`
}

/**
 *  illuminated on even seconds and off on odd seconds.
 * 
 * @param Date date 
 * @returns string
 */
export function getSecond(date){
    const { seconds } = parseDate(date);
    return seconds % 2 === 0 ? 'Y' : 'O';
}

/**
 * 5 hour blocks and is made up of 4 red lamps.
 * 
 * @param Date date 
 * @returns string
 */
export function getFiveHours(date){
    const { hours } = parseDate(date);
    const R = parseInt(hours / 5);
    return 'R'.repeat(R) + 'O'.repeat( 4 - R)
}


/**
 * 1 hour blocks and is made up of 4 red lamps.
 * 
 * @param Date date 
 * @returns string
 */
export function getSingleHours(date){
    const { hours } = parseDate(date);
    const R = (hours % 5);
    return 'R'.repeat(R) + 'O'.repeat( 4 - R)
}

/**
 * 5 minute blocks, and is made up of 11 lamps- every third lamp is red
 * 
 * @param Date date 
 * @returns string
 */
export function getFiveMinutes(date){
    const { minutes } = parseDate(date);
    const Y = parseInt(minutes / 5);
    let fiveMinutes = 'Y'.repeat(Y) + 'O'.repeat( 11 - Y); 
    for (let index = 1; index <= fiveMinutes.length; index++) {
       if(index % 3 === 0 && fiveMinutes.charAt(index -1) !== 'O'){
            fiveMinutes = fiveMinutes.replaceAt(index - 1, 'R');
       }
    }
    return fiveMinutes;
}

/**
 * 1 minute blocks, and is made up of 4 yellow lamps.
 * 
 * @param Date date 
 * @returns string
 */
export function getSingleMutes(date){
    const { minutes } = parseDate(date);
    const Y = (minutes % 5);
    return 'Y'.repeat(Y) + 'O'.repeat( 4 - Y)
}

/**
 * Extract clock rows from berlin time format
 * 
 * @param string time 
 * @returns 
 */
export function parseBerlinTime(time){
    if(typeof time !== 'string' || time.length !== 24) return;
    return {
        seconds: time.charAt(0),
        fiveHours: time.slice(1, 5).split(''),
        singleHours: time.slice(5, 9).split(''),
        fiveMinutes: time.slice(9, 20).split(''),
        singleMinutes: time.slice(20, 24).split(''),
    }
}