import EncryptedStorage from 'react-native-encrypted-storage';

const sessionKey = '@movie-app';

async function storeSession(data: string) {
  try {
    await EncryptedStorage.setItem(sessionKey, data);
  } catch (error) {
    // There was an error on the native side
    console.error(error);
  }
}

async function retrieveSession(): Promise<string | null> {
  try {
    const session = await EncryptedStorage.getItem(sessionKey);

    if (session !== null) {
      // Value successfully retrieved !
      return session;
    }
    return null;
  } catch (error) {
    // There was an error on the native side
    console.error(error);
    return null;
  }
}

async function removeSession() {
  try {
    await EncryptedStorage.removeItem(sessionKey);
  } catch (error) {
    console.error(error);
  }
}

export {removeSession, retrieveSession, storeSession};
