import { PutObjectCommand, S3Client, } from "@aws-sdk/client-s3";


const s3Client = new S3Client({});

const params = {
    Bucket: "testtest240105test", // The name of the bucket. For example, 'sample-bucket-101'.
    //Key: "testContainer/sample_upload.txt", // The name of the object. For example, 'sample_upload.txt'.
    Key: "sample_upload.txt",
    Body: "Hello world", // The content of the object. For example, 'Hello world!".
};

const getObject = async (params) => {
    try {
        const result = await s3Client.send(
            new GetObjectCommand({
              Bucket: params.Bucket,
              Key:params.Key
            })
        )
        return result;
    } catch (error) {
        console.log("Object 조회 Error 발생", err);
    }
}


const objResult = await getObject(params)
                                    .then((result)=> {
                                        return result
                                    })
                                    .catch((error)=> {
                                        console.log("Object 조회 Error 발생" ,error)
                                    })


console.log(await objResult.Body.transformToString())//Hello world
console.log(await getObjectTag(params))


