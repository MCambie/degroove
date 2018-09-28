import app from './firebaseAuth';
import Rebase from 're-base';
require('firebase/firestore');

const firestore = app.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

const base = Rebase.createClass(firestore);

export default base;
