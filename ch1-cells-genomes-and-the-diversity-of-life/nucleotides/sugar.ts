export interface Sugar {
    name: string;
    chemicalFormula: string;
}

export class Deoxyribose implements Sugar {
    name = "Deoxyribose";
    chemicalFormula = "C5H10O4";
}

export class Ribose implements Sugar {
    name = "Ribose";
    // Ribose is similar to Deoxyribose, except that it has hydroxyl group extra compared to Deoxyribose.
    chemicalFormula = "C5H10O5";
}
