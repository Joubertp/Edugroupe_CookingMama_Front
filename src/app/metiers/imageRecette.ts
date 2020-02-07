import { Recette } from './recette';

export class ImageRecette {
    constructor(
        public id : number,
        public filename : string,
        public contentType : string,
        public storageId : string,
        public recette? : Recette
    ) {}
}