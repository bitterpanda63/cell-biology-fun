import {Deoxyribose, Ribose, Sugar} from "./sugar";

export interface Base {
    name: string;
    symbol: string;
    bondsWith: (base: Base) => boolean;
    worksWithSugar(sugar: Sugar): boolean;
}

export class Adenine implements Base {
    name = "Adenine";
    symbol = "A";
    bondsWith(base: Base) {
        if (base instanceof Thymine) {
            // Adenine pairs with Thymine in DNA
            return true;
        }
        if (base instanceof Uracil) {
            // Adenine pairs with Uracil in RNA
            return true;
        }
        return false;
    }
    worksWithSugar(sugar: Sugar) {
        return true;
    }
}

export class Thymine implements Base {
    name = "Thymine";
    symbol = "T";
    bondsWith(base: Base) {
        if (base instanceof  Adenine) {
            // Thymine pairs with Adenine in DNA
            return true;
        }
        return false;
    }
    worksWithSugar(sugar: Sugar) {
        return sugar instanceof Deoxyribose;
    }
}


export class Cytosine implements Base {
    name = "Cytosine";
    symbol = "C";
    bondsWith(base: Base) {
        if (base instanceof Guanine) {
            // Cytosine pairs with Guanine in DNA and RNA
            return true;
        }
        return false;
    }
    worksWithSugar(sugar: Sugar) {
        return true;
    }
}

export class Guanine implements Base {
    name = "Guanine";
    symbol = "G";
    bondsWith(base: Base) {
        if (base instanceof Cytosine) {
            // Guanine pairs with Cytosine in DNA and RNA
            return true;
        }
        return false;
    }
    worksWithSugar(sugar: Sugar) {
        return true;
    }
}

export class Uracil implements Base {
    name = "Uracil";
    symbol = "U";
    bondsWith(base: Base) {
        if (base instanceof Adenine) {
            // Uracil pairs with Adenine in RNA
            return true;
        }
        return false;
    }
    worksWithSugar(sugar: Sugar) {
        return sugar instanceof Ribose;
    }
}