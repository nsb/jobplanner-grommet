import { observable, action } from "mobx";

import CommonStore from "./CommonStore";

class UiStore extends CommonStore {
    @observable navActive: boolean = true;

    @action setNavActive(active: boolean): void {
        this.navActive = active;
    }
}

export default UiStore;
