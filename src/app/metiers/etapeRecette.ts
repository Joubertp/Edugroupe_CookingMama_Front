export class EtapeRecette {
    constructor(
        public numero: number,
        public description: string
    ){}

    public static newEmpty() : EtapeRecette {
        return new EtapeRecette(0,"")
    }
}
