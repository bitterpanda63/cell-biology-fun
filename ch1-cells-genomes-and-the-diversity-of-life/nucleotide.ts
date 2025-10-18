
interface Sugar {
    name: string;
    chemicalFormula: string;
}

interface Base {
    name: string;
    symbol: string;
    bondsWith: (base: Base) => boolean;
}

class Deoxyribose implements Sugar {
    name = "Deoxyribose";
    chemicalFormula = "C5H10O4";
}

class Adenine implements Base {
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
}

class Thymine implements Base {
    name = "Thymine";
    symbol = "T";
    bondsWith(base: Base) {
        if (base instanceof  Adenine) {
            // Thymine pairs with Adenine in DNA
            return true;
        }
        return false;
    }
}

class Cytosine implements Base {
    name = "Cytosine";
    symbol = "C";
    bondsWith(base: Base) {
        if (base instanceof Guanine) {
            // Cytosine pairs with Guanine in DNA and RNA
            return true;
        }
        return false;
    }
}

class Guanine implements Base {
    name = "Guanine";
    symbol = "G";
    bondsWith(base: Base) {
        if (base instanceof Cytosine) {
            // Guanine pairs with Cytosine in DNA and RNA
            return true;
        }
        return false;
    }
}

class Uracil implements Base {
    name = "Uracil";
    symbol = "U";
    bondsWith(base: Base) {
        if (base instanceof Adenine) {
            // Uracil pairs with Adenine in RNA
            return true;
        }
        return false;
    }
}

class Nucleotide {
    sugar: Sugar;
    base: Base;
    phosphateBondedWith?: Nucleotide;
    sugarBondedWith?: Nucleotide;
    baseBondedWith?: Nucleotide;

    constructor(sugar: Sugar, base: Base) {
        this.sugar = sugar;
        this.base = base;
    }

    describe(): string {
        return `This nucleotide has a ${this.sugar.name} sugar and a ${this.base.name} (${this.base.symbol}) base.`;
    }
    bindPhosphateGroup(nucleotide: Nucleotide) {
        this.phosphateBondedWith = nucleotide;
    }
    bindSugar(nucleotide: Nucleotide) {
        this.sugarBondedWith = nucleotide;
    }
    bindBase(nucleotide: Nucleotide) {
        if (nucleotide.base.bondsWith(this.base)) {
            this.baseBondedWith = nucleotide;
            nucleotide.baseBondedWith = this;
        }
    }
}

(() => {
    console.log(new Nucleotide(new Deoxyribose(), new Adenine()).describe());
})();