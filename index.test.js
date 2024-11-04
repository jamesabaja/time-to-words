const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00");
    expect(timeInWords).toBe("midnight");
  });

  it("Handles midday", () => {
    const timeInWords = convertTimeToWords("12:00");
    expect(timeInWords).toBe("midday");
  });

  it("Handles 2:00", () => {
    const timeInWords = convertTimeToWords("2:00");
    expect(timeInWords).toBe("two o'clock");
  });

  it("Handles 2:15", () => {
    const timeInWords = convertTimeToWords("2:15");
    expect(timeInWords).toBe("quarter past two");
  });

  it("Handles 2:30", () => {
    const timeInWords = convertTimeToWords("2:30");
    expect(timeInWords).toBe("half past two");
  });

  it("Handles 2:45", () => {
    const timeInWords = convertTimeToWords("2:45");
    expect(timeInWords).toBe("quarter to three");
  });

  it("Handles times between 2:00 - 2:15", () => {
    const timeInWords = convertTimeToWords("2:03");
    expect(timeInWords).toBe("three past two");
  });

  it("Handles times between 2:15 - 2:30", () => {
    const timeInWords = convertTimeToWords("2:17");
    expect(timeInWords).toBe("seventeen past two");
  });

  it("Handles times between 2:30 - 2:45", () => {
    const timeInWords = convertTimeToWords("2:40");
    expect(timeInWords).toBe("twenty to three");
  });

  it("Handles times between 2:45 - 3:00", () => {
    const timeInWords = convertTimeToWords("2:55");
    expect(timeInWords).toBe("five to three");
  });
});
