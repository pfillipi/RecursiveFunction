/*

*/

function findModule(obj, moduleName) {
  /* Your Code Here */
}

describe("Recursive Function", () => {
  const state = {
    module: "top",
    items: [
      {
        module: "parent",
        items: [
          {
            module: "getme"
          },
          {
            module: "dude"
          },
          {
            module: "gal",
            items: [
              {
                module: "boy"
              }
            ]
          }
        ]
      },
      {
        module: "anotherParent"
      }
    ]
  };

  it("Function should return an object", () => {
    // ASSERT => Compare result to expected state
    expect(findModule(state, "boy")).toEqual({ module: "boy" });
  });

  it("Function should return null if module cannot be found", () => {
    // ASSERT => Compare result to expected state
    expect(findModule(state, "THISMODULEDOESNTEXIST")).toEqual(null);
  });
});
