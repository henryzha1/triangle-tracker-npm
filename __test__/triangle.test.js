import Triangle from '../src/triangle.js';

describe('Triangle', () => {

  test('should create a triangle with 3 lengths', () => {
    const triangle = new Triangle(3,4,5);
    expect(triangle.side1).toEqual(3);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });

  test('should correctly determine triangle is not a triangle', () => {
    const notATriangle = new Triangle(100,4,20);
    expect(notATriangle.testing()).toEqual("NOT A TRIANGLE");
  });

  test('should correctly determine triangle is an equilateral', () => {
    const notATriangle = new Triangle(2,2,2);
    expect(notATriangle.testing()).toEqual("EQUILATERAL");
  });

  test('should correctly determine triangle is an isosceles', () => {
    const notATriangle = new Triangle(100,4,20);
    expect(notATriangle.testing()).toEqual("ISOSCELES");
  });

  test('should correctly determine triangle is a scalene', () => {
    const notATriangle = new Triangle(100,4,20);
    expect(notATriangle.testing()).toEqual("SCALENE");
  });


});