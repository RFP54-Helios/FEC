import { averageRating } from './helperFunctions.js';
import { getStarsArr } from './helperFunctions.js';

describe('stars calculator', () => {
  it('should be defined as a function', () => {
    expect(averageRating).toBeDefined;
    expect(typeof averageRating).toBe('function');
  });

  it('should return a number', () => {
    let ratings = {1: "16", 2: "8", 3: "6", 4: "4", 5: "9"}
    let result = averageRating(ratings);
    expect(result).toBeDefined;
    expect(typeof result).toBe('number');
  });

  it('should return 5 for a single 5 star review', () => {
    let ratings = {5: "1"}
    let result = averageRating(ratings);
    expect(result).toBe(5);
  });

  it('should return 5 for many 5 star reviews', () => {
    let ratings = {5: "100"}
    let result = averageRating(ratings);
    expect(result).toBe(5);
  });

  it('should return 4.5 for equal 4 & 5 star reviews', () => {
    let ratings = {4: "10", 5: "10"}
    let result = averageRating(ratings);
    expect(result).toBe(4.5);
  });

  it('should return 2.5 for Morning Joggers', () => {
    let ratings = {1: "16", 2: "8", 3: "6", 4: "4", 5: "9"}
    let result = averageRating(ratings);
    expect(result).toBe(2.5);
  });

  it('should return 3.5 for Slackers Slacks', () => {
    let ratings = {
      "1": "4",
      "2": "5",
      "3": "5",
      "4": "12",
      "5": "5"
    }
    let result = averageRating(ratings);
    expect(result).toBe(3.5);
  });

  it('should return 3.5 for Heir Force Ones', () => {
    let ratings = {1: "8", 2: "7", 3: "25", 4: "17", 5: "35"}
    let result = averageRating(ratings);
    expect(result).toBe(3.5);
  });

  it('should return the rating for a single rating', () => {
    let ratings = 5
    let result = averageRating(ratings);
    expect(result).toBe(5);
  });

  it('should return 0 for no ratings initial state', () => {
    let ratings = []
    let result = averageRating(ratings);
    expect(result).toBe(0);
  });

});


describe('get stars array', () => {
  it('should be defined as a function', () => {
    expect(getStarsArr).toBeDefined;
    expect(typeof getStarsArr).toBe('function');
  });

  it('should return an array', () => {
    let ratings = {1: "16", 2: "8", 3: "6", 4: "4", 5: "9"}
    let result = getStarsArr(ratings);
    expect(Array.isArray(result)).toBe(true);
  });

  it('should an empty array for no ratings', () => {
    let ratings = {}
    let result = JSON.stringify(getStarsArr(ratings));
    expect(result).toBe(JSON.stringify([0, 0, 0, 0, 0]));
  });

  it('should an empty array for an array of no ratings', () => {
    let ratings = []
    let result = JSON.stringify(getStarsArr(ratings));
    expect(result).toBe(JSON.stringify([0, 0, 0, 0, 0]));
  });

  it('should return 5 for a single 5 star review', () => {
    let ratings = {5: "1"}
    let result = JSON.stringify(getStarsArr(ratings));
    expect(result).toBe(JSON.stringify([1, 1, 1, 1, 1]));
  });

  it('should return 5 for many 5 star reviews', () => {
    let ratings = {5: "100"}
    let result = JSON.stringify(getStarsArr(ratings));
    expect(result).toBe(JSON.stringify([1, 1, 1, 1, 1]));
  });

  it('should return 4.5 for equal 4 & 5 star reviews', () => {
    let ratings = {4: "10", 5: "10"}
    let result = JSON.stringify(getStarsArr(ratings));
    expect(result).toBe(JSON.stringify([1, 1, 1, 1, 0.5]));
  });

  it('should return 2.5 for Morning Joggers', () => {
    let ratings = {1: "16", 2: "8", 3: "6", 4: "4", 5: "9"}
    let result = JSON.stringify(getStarsArr(ratings));
    expect(result).toBe(JSON.stringify([1, 1, 0.5, 0, 0]));
  });

  it('should return 3.25 for Slackers Slacks', () => {
    let ratings = {
      "1": "4",
      "2": "5",
      "3": "5",
      "4": "12",
      "5": "5"
    }
    let result = JSON.stringify(getStarsArr(ratings));
    expect(result).toBe(JSON.stringify([1, 1, 1, 0.5, 0]));
  });

  it('should return 3.75 for Heir Force Ones', () => {
    let ratings = {1: "8", 2: "7", 3: "25", 4: "17", 5: "35"}
    let result = JSON.stringify(getStarsArr(ratings));
    expect(result).toBe(JSON.stringify([1, 1, 1, 0.5, 0]));
  });

  it('should return the rating for a single rating', () => {
    let ratings = 5
    let result = JSON.stringify(getStarsArr(ratings));
    expect(result).toBe(JSON.stringify([1, 1, 1, 1, 1]));
  });

});
