import SQLite from 'react-native-sqlite-2';

export const db = SQLite.openDatabase('myDatabase.db', '1.0', '', 1);
