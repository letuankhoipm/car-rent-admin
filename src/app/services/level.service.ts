import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LevelDetail } from 'app/models/level.model';
import { environment as env } from '../../environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LevelService extends BaseService {

  private levelEndpoint = `${env.API_URL}/level`;

  constructor(http: HttpClient) {
    super(http);
  }

  public getLevel = () => {
    return this.get(this.levelEndpoint);
  }

  public getLevelById = (id: number) => {
    return this.get(`${this.levelEndpoint}/${id}`);
  }

  public updateLevelBenefit = (id: number, data: LevelDetail) => {
    return this.patch(data, `${this.levelEndpoint}/${id}`);
  }
}
