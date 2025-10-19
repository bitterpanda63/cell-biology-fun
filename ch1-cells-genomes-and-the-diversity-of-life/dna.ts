import {Adenine, Base, Cytosine, Guanine, Thymine, Uracil} from "./nucleotides/base";
import {Nucleotide} from "./nucleotides/nucleotide";
import {Deoxyribose, Sugar} from "./nucleotides/sugar";

function main(code: string) {
    console.log("Generating DNA from code");
    const environment = new Environment();
    let startOfChain: Nucleotide | null = null;
    let endOfChain: Nucleotide | null = null;
    for (let i = 0; i < code.length; i++) {
        const symbol = code.charAt(i).toUpperCase();
        const baseFromSymbol: Base = environment.getBaseMatchingSymbol(symbol);

        const nucleotide: Nucleotide = new Nucleotide(new Deoxyribose(), baseFromSymbol);
        if (startOfChain === null) {
            console.log("Starting DNA chain...")
            startOfChain = nucleotide;
        }

        const mirrorBase: Base = environment.getBaseBondingWithBase(nucleotide.base, nucleotide.sugar);
        const mirrorNucleotide = new Nucleotide(new Deoxyribose(), mirrorBase);
        nucleotide.bindBase(mirrorNucleotide);

        // Create phosphate link
        if (endOfChain !== null) {
            // phosphate group is typically viewed in diagrams as the left side of the nucleotide
            // so we're making a DNA strain L-to-R
            nucleotide.bindPhosphateGroup(endOfChain);
            endOfChain.bindSugar(nucleotide);
        }
        endOfChain = nucleotide;
    }
    console.log(startOfChain?.describeLR());
}

class Environment {
    basesAvailable: Base[];
    constructor(adenineMolecules = 100, thymineMolecules = 100, uracilMolecules = 100, cytosineMolecules = 100, guanineMolecules = 100) {
        this.basesAvailable = [];
        for (let i = 0; i < adenineMolecules; i++) {
            this.basesAvailable.push(new Adenine());
        }
        for (let i = 0; i < thymineMolecules; i++) {
            this.basesAvailable.push(new Thymine());
        }
        for (let i = 0; i < uracilMolecules; i++) {
            this.basesAvailable.push(new Uracil());
        }
        for (let i = 0; i < cytosineMolecules; i++) {
            this.basesAvailable.push(new Cytosine());
        }
        for (let i = 0; i < guanineMolecules; i++) {
            this.basesAvailable.push(new Guanine());
        }
    }

    getBaseMatchingSymbol(symbol: string): Base {
        for (let i = 0; i < this.basesAvailable.length; i++) {
            const baseInEnvironment = this.basesAvailable[i];
            if (baseInEnvironment && baseInEnvironment.symbol.toUpperCase() === symbol.toUpperCase()) {
                // The base gets taken out of the environment
                delete this.basesAvailable[i];
                return baseInEnvironment;
            }
        }
        throw new Error(`No matching base found in environment for symbol: ${symbol}`)
    }

    getBaseBondingWithBase(base: Base, sugar: Sugar): Base {
        for (let i = 0; i < this.basesAvailable.length; i++) {
            const baseInEnvironment = this.basesAvailable[i];
            if (
                baseInEnvironment &&
                baseInEnvironment.bondsWith(base) &&
                baseInEnvironment.worksWithSugar(sugar)) {
                delete this.basesAvailable[i]; // gets taken out of environment
                return baseInEnvironment;
            }
        }
        throw new Error(`No mirroring base found in environment for base=${base} and sugar=${sugar}`);
    }
}

main("ATCAATGGGTA")