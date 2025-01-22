const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles 8:00', () => {
    const timeInWords = convertTimeToWords('8:00');
    expect(timeInWords).toBe("eight o'clock");
  });

  it('Handles 2:50', () => {
    const timeInWords = convertTimeToWords('2:50');
    expect(timeInWords).toBe('ten to three');
  });

  it('Handles 12:45', () => {
    const timeInWords = convertTimeToWords('12:45');
    expect(timeInWords).toBe('quarter to one');
  });
});
