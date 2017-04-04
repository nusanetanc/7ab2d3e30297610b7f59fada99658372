import { Injectable }     from 'angular2/core';

import {Sub} from "./subscriber";

@Injectable()
export class SubDataService {

    private sub: Sub = new Sub();

    getData(): Sub {
        return this.sub;
    }

    setData(_sub: Sub) {
        this.sub = Sub;
    }
}