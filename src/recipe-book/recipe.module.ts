export interface IRecipe{
     name: string;
     description: string;
     imgPath: string;
}

export class Recipe{
    public recipe: IRecipe = {
        name: "",
        description: "",
        imgPath: ""
    };

    constructor(name: string, desc: string, ImgPath: string){
        this.recipe.name=name
        this.recipe.description=desc
        this.recipe.imgPath=ImgPath
    }
}