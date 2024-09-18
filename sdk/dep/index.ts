import _ from "lodash"

export function testDeps() {
  return _.join(["a", "b", "c"], ",")
}