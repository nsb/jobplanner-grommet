import {useStrict} from "mobx";
import BaseStore from "./BaseStore";
useStrict(true);

class CommonStore extends BaseStore {
    // @observable private token: string;

}

export default new CommonStore();
