import type {Sugar} from "./sugar";
import type {Base} from "./base";


export class Nucleotide {
    sugar: Sugar;
    base: Base;
    phosphateBondedWith?: Nucleotide;
    sugarBondedWith?: Nucleotide;
    baseBondedWith?: Nucleotide;

    constructor(sugar: Sugar, base: Base) {
        this.sugar = sugar;
        this.base = base;
    }

    describeLR(): string {
        let text = `|${this.sugar.name}| (${this.base.name}) <----> (${this.baseBondedWith?.base.name})`;
        if (this.sugarBondedWith) {
            text += `\n${this.sugarBondedWith.describeLR()}`;
        }
        return text;
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
        } else {
            throw new Error(`Unknown base bonds ${nucleotide.base.name}`);
        }
    }
}