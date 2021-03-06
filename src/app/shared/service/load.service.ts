import { RequestOptions } from '@angular/http';
import { OnInit } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { BaseService } from './base.service';
import { DefaultOptionsService } from '../default-options.service';


export abstract class LoadService
	<EntityIn extends Object, EntityOut extends Object> extends BaseService<EntityIn, EntityOut> {

    public constructor(http: BaseHttpService
    ) {
        super(http);
    }

    public abstract load(data: EntityIn): Promise<any>;

    // public abstract cureIn(): EntityIn;
}
