import { PutObjectCommand, CreateBucketCommand,GetObjectCommand, S3Client, GetObjectTaggingCommand, ListObjectsCommand, CopyObjectCommand, DeleteObjectCommand} from "@aws-sdk/client-s3";


const s3Client = new S3Client({});



const params = {
    Bucket: "testtest240105test", // The name of the bucket. For example, 'sample-bucket-101'.
    //Key: "testContainer/sample_upload.txt", // The name of the object. For example, 'sample_upload.txt'.
    Key: "sample_upload.txt",
    Body: "Hello world", // The content of the object. For example, 'Hello world!".
};





const createParams = {
    Bucket: "testtest240105test", // The name of the bucket. For example, 'sample-bucket-101'.
    //Key: "testContainer/sample_upload.txt", // The name of the object. For example, 'sample_upload.txt'.
    Key: "latest/sample_upload222.txt",
    Body: "Hello world", // The content of the object. For example, 'Hello world!".
    Tagging: "Version=A222",
};


const createObj = async (params) => {
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
    } catch (error) {
        console.log("버킷 생성 Error 발생", error);
    }
}




//createObj(createParams);



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


const getObjectTag = async (params) => {
    try {
        const result = await s3Client.send(
            new GetObjectTaggingCommand({
              Bucket: params.Bucket,
              Key:params.Key
            })
        )
        return result;
    } catch (error) {
        console.log("Object Tag 조회 Error 발생", error);
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





const getObjList = async (params) => {
    try {
      const listResult = await s3Client.send(new ListObjectsCommand({
        Bucket: "testtest240105test",
        Prefix: "latest/",
        MaxKeys: 5,
      }));  
      console.log("Your bucket contains the following objects:\n");
      console.log(listResult.Contents)

    } catch (err) {
      console.error(err);
    }
  };

//getObjList(params);

const copyObj = async ()=> {
    try {
        const listResult = await s3Client.send(new CopyObjectCommand({
            Bucket: "testtest240105test",
            CopySource : "latest/sample_upload222.txt",
            Key: "sample_upload222.txt",
          }));          
        
    } catch (error) {
        console.error(error);
    }
}

//copyObj()


const deleteObj = async () => {
    try {
        const listResult = await s3Client.send(new DeleteObjectCommand({
            Bucket: "testtest240105test",
            Key: "testFolder/sample_upload.txt",
          }));        
        
    } catch (error) {
        console.error(error);
    }
}

//deleteObj();