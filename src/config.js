const dev = {
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-srfz8mrntksg"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://f6ixx0pv9f.execute-api.ap-southeast-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_Hp4FyeJdz",
    APP_CLIENT_ID: "6maahee6ni0cntkmpn5ktjeqc8",
    IDENTITY_POOL_ID: "ap-southeast-1:bcf7b9da-d58c-49dd-978b-4de4b2925a5d"
  }
};

const prod = {
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-14n5vz3p7faeg"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://t7y9t0sr6g.execute-api.ap-southeast-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_zBB46D7NP",
    APP_CLIENT_ID: "5h0csg1hjhn94rb3hacro1900a",
    IDENTITY_POOL_ID: "ap-southeast-1:a272fb18-3ddf-4bba-b0b8-0b8856e417c9"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
