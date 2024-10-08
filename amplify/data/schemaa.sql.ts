/* eslint-disable */
/* THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. */
import { a } from "@aws-amplify/data-schema";
import { configure } from "@aws-amplify/data-schema/internals";
import { secret } from "@aws-amplify/backend";

export const schema = configure({
    database: {
        identifier: "ID4UXAyugJJsK5KuBGFvtQ",
        engine: "postgresql",
        connectionUri: secret("SQL_CONNECTION_STRINGG")
    }
}).schema({
    "car": a.model({
        plateId: a.string().required(),
        carName: a.string()
    }).identifier([
        "plateId"
    ]),
    "student": a.model({
        studentId: a.integer().required(),
        name: a.string().required(),
        phone: a.string()
    }).identifier([
        "studentId"
    ])
});
