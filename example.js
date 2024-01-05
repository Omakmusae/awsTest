import AWS from 'aws-sdk';//비추천하는 aws sdk 사용 방법
import S3 from 'aws-sdk/clients/s3' //필요한 S3 모듈만 불러오는 aws sdk 사용 방법 - 추천
import dotenv from 'dotenv'
dotenv.config();
// AWS.config.update({
//     accessKeyId: process.env.S3_ACCESS_KEY_ID,
//     secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
//     region: 'ap-northeast-2',
//  });
console.log(process.env.S3_ACCESS_KEY_ID)
console.log("sdfsfd");
