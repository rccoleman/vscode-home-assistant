import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

// The generated schemas are not part of the repository, they are created by `npm run schema`
const schemaPath = path.join(
  __dirname,
  "../../../src/language-service/src/schemas/json/configuration.json",
);

suite("Time trigger and condition schema", () => {
  const loadSchema = (): any => JSON.parse(fs.readFileSync(schemaPath, "utf-8"));

  const isAccepted = (property: any, value: string): boolean =>
    (property.anyOf as Array<{ type?: string; pattern?: string }>)
      .filter((alternative) => alternative.type === "string")
      .some(
        (alternative) =>
          alternative.pattern === undefined ||
          new RegExp(alternative.pattern).test(value),
      );

  const atProperty = () => loadSchema().definitions.TimeTrigger.properties.at;

  for (const value of [
    "08:00",
    "08:00:00",
    "input_datetime.wake_up",
    "sensor.sunrise_time",
  ]) {
    test(`accepts '${value}'`, () => {
      assert.ok(
        isAccepted(atProperty(), value),
        `'at: ${value}' is not accepted by the schema`,
      );
    });
  }

  test("rejects text that is not a time", () => {
    assert.ok(!isAccepted(atProperty(), "not a time"));
  });

  test("time condition accepts HH:MM for before and after", () => {
    const condition = loadSchema().definitions.TimeCondition.properties;
    for (const property of [condition.before, condition.after]) {
      // These are a single string type with a combined pattern, or alternatives
      const matches = (value: string) =>
        property.anyOf
          ? isAccepted(property, value)
          : new RegExp(property.pattern).test(value);
      assert.ok(matches("08:00"));
      assert.ok(matches("21:00:30"));
    }
  });
});
