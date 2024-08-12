import { Account, Avatars, Client, Databases, ID, Query, Storage } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: process.env.APPWRITE_ENDPOINT,
  platform: process.env.APPWRITE_PLATFORM,
  projectId: process.env.APPWRITE_PROJECT_ID,
  databaseId: process.env.APPWRITE_DATABASE_ID,
  userCollectionId: process.env.APPWRITE_USER_COLLECTION_ID,
  storageId: process.env.APPWRITE_STORAGE_ID,
};

const client = new Client();

client.setEndpoint(appwriteConfig.endpoint).setProject(appwriteConfig.projectId).setPlatform(appwriteConfig.platform);

const account = new Account(client);
const storage = new Storage(client);
const databases = new Databases(client);

// Sign Up
export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(ID.unique(), email, password, username);

    if (!newAccount) throw Error;

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
      }
    );

    return newUser;
  } catch (error) {
    throw new Error(error);
  }
}

// Sign In
export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

// Get Account
export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    throw new Error(error);
  }
}

// Get Current User
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.userCollectionId, [
      Query.equal("accountId", currentAccount.$id),
    ]);

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Sign Out
export async function signOut() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

// Create Client
export async function createClient(clientData) {
  try {
    const newClient = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.clientsCollectionId,
      ID.unique(),
      clientData
    );

    return newClient;
  } catch (error) {
    throw new Error(error);
  }
}

// Get All Clients
export async function getAllClients() {
  try {
    const clientsList = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.clientsCollectionId);

    return clientsList.documents;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Get All Cars
export async function getAllCars() {
  try {
    const carsList = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.carsCollectionId);

    for (let car of carsList.documents) {
      try {
        const fileId = car.imageId;

        const fileUrl =
          appwriteConfig.endpoint +
          `/storage/buckets/${appwriteConfig.carsStorageId}/files/${fileId}/view?project=${appwriteConfig.projectId}`;

        car.imageUrl = fileUrl;
      } catch (imageError) {
        console.log("Error fetching image for car number:", car.number, imageError);
        car.imageUrl = null; // or a default image placeholder if desired
      }
    }
    console.log(carsList.documents);

    return carsList.documents;
  } catch (error) {
    console.log(error);
    return [];
  }
}
