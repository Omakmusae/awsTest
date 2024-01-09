// Import required AWS SDK clients and commands for Node.js.
import { PutObjectCommand, CreateBucketCommand,GetObjectCommand, S3Client} from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client.js";

// Set the parameters
const params = {
  Bucket: "testtest240105test", // The name of the bucket. For example, 'sample-bucket-101'.
  Key: "sample_upload.txt", // The name of the object. For example, 'sample_upload.txt'.
  Body: "Hello world", // The content of the object. For example, 'Hello world!".
};

const s3Client = new S3Client({region:'us-east-1'})

const run = async () => {
  // Create an Amazon S3 bucket.
  try {
    const data = await s3Client.send(
        new CreateBucketCommand({ Bucket: params.Bucket })
    );
    console.log(data);
    console.log("Successfully created a bucket called ", data.Location);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
  // Create an object and upload it to the Amazon S3 bucket.
  try {
    const results = await s3Client.send(new PutObjectCommand(params));
    console.log(
        "Successfully created " +
        params.Key +
        " and uploaded it to " +
        params.Bucket +
        "/" +
        params.Key
    );
    return results; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};

// run()
//   .then((result) => {
//     // Handle the result if needed
//     console.log("Execution completed:", result);
//   })
//   .catch((error) => {
//     // Handle any errors that occurred during execution
//     console.error("Error during execution:", error);
//   });



const data = await s3Client.send(
    new GetObjectCommand({
      Bucket: 'testtest240105test',
      Key: 'sample_upload.txt',
    })
);

const result = await data.Body.transformToString();

console.log(result)

// const { Body } = await s3Client.send(
//     new GetObjectCommand({
//       Bucket: 'cd-cals-meta',
//       Key: '1fc364acdb7711eab9cc0ab4a295bf36/demo/api/A10663/meta.txt',
//     })
// );

//console.log(await Body.transformToString());



//console.log( "metadata " , Body)


