/*
	Should take 2 objects and return an array the containing the keys in each object that either
	don't exist in the other object or have a value that does not match the value for
	the same key in the other object.
*/
function findDifference(person1, person2) {
  /* Your Code Here */
  let array = [];
  for (let prop in person1) {
    if (person1[prop] !== person2[prop]) {
      array.push(prop)
    }
  }
  for (let prop in person2) {
    if (person2[prop] !== person1[prop]) {
      if(!array.includes(prop)) array.push(prop)
    }
  }
  console.log(person1, person2)
  console.log(array)
  return array
}

describe("Object Comparison Function", () => {
  it("Function should return an array of non matching keys", (done) => {
    const person1 = {
      name: "Joe",
      age: 32,
      color: "blue"
    };

    const person2 = {
      name: "Joe",
      age: 45,
      height: "5ft",
      color: "red"
    };

    // ASSERT => Compare result to expected state
    // Expected: result = ['age', 'color', 'height']
    const result = findDifference(person1, person2);
    expect(result).toContain("age");
    expect(result).toContain("color");
    expect(result).toContain("height");
    expect(result).toHaveLength(3);

    done();
  });

  it("Function should return an array of non matching keys", (done) => {
    const person1 = {
      name: "Joe",
      age: 45,
      height: "5ft",
      color: "red"
    };

    const person2 = {
      name: "Joe",
      age: 32,
      color: "blue"
    };

    // ASSERT => Compare result to expected state
    // Expected: result = ['age', 'color', 'height']
    const result = findDifference(person1, person2);
    expect(result).toContain("age");
    expect(result).toContain("color");
    expect(result).toContain("height");
    expect(result).toHaveLength(3);

    done();
  });

  it("Function should return an array of non matching keys", (done) => {
    const person1 = {
      name: "Joe",
      age: 45,
      height: "5ft",
      color: "red"
    };

    const person2 = {
      name: "Joe",
      age: 32,
      weight: "160lb",
      color: "blue"
    };

    // ASSERT => Compare result to expected state
    // Expected: result = ['age', 'color', 'height', 'weight']
    const result = findDifference(person1, person2);
    expect(result).toContain("age");
    expect(result).toContain("color");
    expect(result).toContain("height");
    expect(result).toContain("weight");
    expect(result).toHaveLength(4);

    done();
  });
});
