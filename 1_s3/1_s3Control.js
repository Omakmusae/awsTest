// Import required AWS SDK clients and commands for Node.js.
import { PutObjectCommand, CreateBucketCommand,GetObjectCommand, S3Client, GetObjectTaggingCommand} from "@aws-sdk/client-s3";


// Set the parameters
const params = {
    Bucket: "testtest240105test", // The name of the bucket. For example, 'sample-bucket-101'.
    //Key: "testContainer/sample_upload.txt", // The name of the object. For example, 'sample_upload.txt'.
    Key: "sample_upload.txt",
    Body: "Hello world", // The content of the object. For example, 'Hello world!".
};

// client 메소드에 매개변수가 없으면 로컬 .aws에 있는 정보 활용
const s3Client = new S3Client({}); 
// const s3Client = new S3Client({region:'us-east-1'})

//객체 생성
const createBucket = async (name) => {
    try {
        const data = await s3Client.send(
            new CreateBucketCommand({ Bucket: name })
        );
        console.log(data);
        console.log("Successfully created a bucket called ", data.Location);
        return data; // For unit tests.
    } catch (error) {
        console.log("버킷 생성 Error 발생", error);
    }
}


const createObject = async (params)=> {
    try {
        const result = await s3Client.send(new PutObjectCommand(params));
        console.log(
            "Successfully created " +
            params.Key +
            " and uploaded it to " +
            params.Bucket +
            "/" +
            params.Key
        );
        return result; // For unit tests.
      } catch (err) {
        console.log("Object 생성 Error 발생", err);
      }
}


const getObject = async (params) => {
    try {
        const result = await s3Client.send(
            new GetObjectCommand({
              Bucket: params.Bucket,
              Key: params.Key,
            })
        )
        return result;
    } catch (error) {
        console.log("Object 조회 Error 발생", err);
    }
}



//createObject(params);
const objResult = await getObject(params)
                                    .then((result)=> {
                                        return result
                                    })
                                    .catch((error)=> {
                                        console.log("Object 조회 Error 발생" ,error)
                                    })


// objResult().then((result) => {
//     console.log(result)
// })


//console.log(await objResult.Body.transformToString())
//질문 사항 : 위 코드에서 await를 빼면 Promise {pending} 이 출력됨. why...? Promise then 처리 헀는데..?

//console.log(await objResult.Body)



const result = await s3Client.send(
    new GetObjectTaggingCommand({
      Bucket: params.Bucket,
      Key: params.Key,
    })
)

console.log(result)


const result2 = await s3Client.send(
    new GetObjectCommand({
      Bucket: params.Bucket,
      Key: params.Key,
    })
)

//console.log(result2)