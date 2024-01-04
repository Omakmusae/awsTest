import S3 from 'aws-sdk/clients/s3' //필요한 S3 모듈만 불러오는 aws sdk 사용 방법 - 추천
import AWS from 'aws-sdk';
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import dotenv from 'dotenv'
import { fileURLToPath } from "url";

dotenv.config()

// AWS.config.update({
//     accessKeyId: process.env.S3_ACCESS_KEY_ID,
//     secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
//     region: 'ap-northeast-2',
//  });

const s3 = new AWS.S3();
s3.listBuckets().promise().then((data) => {
  console.log('S3 : ', JSON.stringify(data, null, 2));
});




const client = new S3Client({});

export const main = async () => {
  const command = new GetObjectCommand({
    Bucket: "cd-cals-meta",
    Key: "0b6b595329fe11eea0890af218b879ee/",
  });

  try {
    const response = await client.send(command);
    // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
    const str = await response.Body.transformToString();
    console.log(str);
  } catch (err) {
    console.error(err);
  }
};


// const calc = (a:number, b:number):number => a+b;

// console.log(calc(1,2));
