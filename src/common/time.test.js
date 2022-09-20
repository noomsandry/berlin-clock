import { getFiveHours, getFiveMinutes, getSecond, getSingleHours, getSingleMutes } from "./time"

describe(
    'test getSecond', () => {
        test('23:59:59 ===> O', () => {
            expect(getSecond(new Date('2011-04-11T23:59:59Z'))).toBe('O')
        })
        test('00:00:00 ===> Y', () => {
            expect(getSecond(new Date('2011-04-11T00:00:00Z'))).toBe('Y')
        })
    }
)

describe(
    'test getFiveHours', () => {
        test('23:59:59 ===> RRRR', () => {
            expect(getFiveHours(new Date('2011-04-11T23:59:59Z'))).toBe('RRRR')
        })
        test('00:00:00 ===> OOOO', () => {
            expect(getFiveHours(new Date('2011-04-11T00:00:00Z'))).toBe('OOOO')
        })
        test('02:04:00	 ===> OOOO', () => {
            expect(getFiveHours(new Date('2011-04-11T02:04:00Z'))).toBe('OOOO')
        })
        test('08:23:00 ===> ROOO', () => {
            expect(getFiveHours(new Date('2011-04-11T08:23:00Z'))).toBe('ROOO')
        })
        test('16:35:00 ===> RRRO', () => {
            expect(getFiveHours(new Date('2011-04-11T16:35:00Z'))).toBe('RRRO')
        })
    }
)

describe(
    'test getSingleHours', () => {
        test('23:59:59 ===> RRRO', () => {
            expect(getSingleHours(new Date('2011-04-11T23:59:59Z'))).toBe('RRRO')
        })
        test('00:00:00 ===> OOOO', () => {
            expect(getSingleHours(new Date('2011-04-11T00:00:00Z'))).toBe('OOOO')
        })
        test('02:04:00	 ===> RROO', () => {
            expect(getSingleHours(new Date('2011-04-11T02:04:00Z'))).toBe('RROO')
        })
        test('08:23:00 ===> RRRO', () => {
            expect(getSingleHours(new Date('2011-04-11T08:23:00Z'))).toBe('RRRO')
        })
        test('14:35:00 ===> RRRR', () => {
            expect(getSingleHours(new Date('2011-04-11T14:35:00Z'))).toBe('RRRR')
        })
    }
)

describe(
    'test getFiveMinutes', () => {
        test('23:59:59 ===> RRRR', () => {
            expect(getFiveMinutes(new Date('2011-04-11T23:59:59Z'))).toBe('YYRYYRYYRYY')
        })
        test('00:00:00 ===> OOOOOOOOOOO', () => {
            expect(getFiveMinutes(new Date('2011-04-11T00:00:00Z'))).toBe('OOOOOOOOOOO')
        })
        test('12:04:00	 ===> OOOOOOOOOOO', () => {
            expect(getFiveMinutes(new Date('2011-04-11T12:04:00Z'))).toBe('OOOOOOOOOOO')
        })
        test('12:23:00	===> YYRYOOOOOOO', () => {
            expect(getFiveMinutes(new Date('2011-04-11T12:23:00Z'))).toBe('YYRYOOOOOOO')
        })
        test('12:35:00	 ===> YYRYYRYOOOO', () => {
            expect(getFiveMinutes(new Date('2011-04-11T12:35:00Z'))).toBe('YYRYYRYOOOO')
        })
    }
)

describe(
    'test getSingleMutes', () => {
        test('23:59:59 ===> RRRR', () => {
            expect(getSingleMutes(new Date('2011-04-11T23:59:59Z'))).toBe('YYYY')
        })
        test('00:00:00 ===> OOOO', () => {
            expect(getSingleMutes(new Date('2011-04-11T00:00:00Z'))).toBe('OOOO')
        })
        test('12:32:00	 ===> OOOO', () => {
            expect(getSingleMutes(new Date('2011-04-11T12:32:00Z'))).toBe('YYOO')
        })
        test('12:34:00	===> ROOO', () => {
            expect(getSingleMutes(new Date('2011-04-11T12:34:00Z'))).toBe('YYYY')
        })
        test('12:35:00	 ===> RRRO', () => {
            expect(getSingleMutes(new Date('2011-04-11T12:35:00Z'))).toBe('OOOO')
        })
    }
)