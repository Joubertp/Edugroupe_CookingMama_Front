export class Recette {
    constructor(public id: number,
        public nom: string,
        public dateCreation: Date,
        public dateDerniereEdition: Date,
        public tempsPreparatioo: number,
        public tempsCuisson: number 
        ){}
}