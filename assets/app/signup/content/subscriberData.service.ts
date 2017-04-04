import { Injectable }     from 'angular2/core';

import {Sub} from "./subscriber";

@Injectable()
export class SubDataService {

    private _sub: Sub = new Sub();

    getData(): Sub {
        return this._sub;
    }

    setData(_sub: Sub) {
        this._sub = Sub;
    }
}