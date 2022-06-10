import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {DataStorageService} from "../shared/data-storage.service";

@Injectable({providedIn:'root'})
export class RecipesResolverService implements Resolve<any>{

  constructor(private dataService:DataStorageService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.dataService.fetchRecipes(); // resolve method will subscribe for us
  }

}
