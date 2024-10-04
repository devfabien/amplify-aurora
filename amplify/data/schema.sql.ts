/* eslint-disable */
/* THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY. */
import { a } from "@aws-amplify/data-schema";
import { configure } from "@aws-amplify/data-schema/internals";
import { secret } from "@aws-amplify/backend";

export const schema = configure({
    database: {
        identifier: "IDN2qTtQ5ew0zZqUdrMnLA",
        engine: "postgresql",
        connectionUri: secret("SQL_CONNECTION_STRING"),
        vpcConfig: {
            vpcId: "vpc-00691791ffaa68863",
            securityGroupIds: [
                "sg-0429277f6ed33ecb5"
            ],
            subnetAvailabilityZones: [
                {
                    subnetId: "subnet-05a7a61b032fdd69d",
                    availabilityZone: "us-east-1c"
                },
                {
                    subnetId: "subnet-0616cae472f50737f",
                    availabilityZone: "us-east-1d"
                },
                {
                    subnetId: "subnet-0e7b0dcb7b4e4aac1",
                    availabilityZone: "us-east-1f"
                },
                {
                    subnetId: "subnet-0c0041ac79a6dcbe3",
                    availabilityZone: "us-east-1b"
                },
                {
                    subnetId: "subnet-0096f326e709d91d7",
                    availabilityZone: "us-east-1e"
                },
                {
                    subnetId: "subnet-0434f1113c2faf33a",
                    availabilityZone: "us-east-1a"
                }
            ]
        }
    }
}).schema({
    "customers": a.model({
        id: a.integer().required(),
        name: a.string().required(),
        phone: a.string().required(),
        email: a.string().required()
    }).identifier([
        "id"
    ])
});
