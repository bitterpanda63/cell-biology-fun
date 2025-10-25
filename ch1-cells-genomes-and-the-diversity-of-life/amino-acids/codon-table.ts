import {Adenine, Base, Cytosine, Guanine, Uracil} from "../nucleotides/base";
import {
    Alanine,
    AminoAcid, Arginine, Asparagine, AsparticAcid,
    Cysteine, GlutamicAcid, Glutamine, Glycine,
    Histidine, Isoleucine,
    Leucine, Lysine, Methionine,
    Phenylalanine,
    Proline,
    Serine, Threonine,
    Tryptophan,
    Tyrosine, Valine
} from "./amino-acids";

// Function converts an array of 3 nucleotide bases to an amino acid or a stop. 5' -> 3'
export function codonToAminoAcid(codon: Base[]): AminoAcid | Stop {
    if (!codon || codon.length !== 3) {
        throw new Error(`Codon should consist of 3 nucleotide bases, not ${codon?.length ?? 0}`);
    }
    const c5 = codon[0];
    const c4 = codon[1];
    const c3 = codon[2];
    if (!c5 || !c4 || !c3) {
        throw new Error("Bases are not allowed to be undefined");
    }

    // While yes this code is definitely not great, it is meant to be a copy of what you would normally do with
    // the wind rose given to you in a textbook. A cool part of this is generating a table by going over all possible combinations.
    if (c5 instanceof Uracil) {
        if (c4 instanceof Uracil) {
            if (c3 instanceof Uracil || c3 instanceof Cytosine) {
                return new Phenylalanine();
            } else {
                return new Leucine();
            }
        } else if (c4 instanceof Cytosine) {
            return new Serine();
        } else if (c4 instanceof Adenine) {
            if (c3 instanceof Uracil || c3 instanceof Cytosine) {
                return new Tyrosine();
            } else {
                return new Stop();
            }
        } else {
            if (c3 instanceof Uracil || c3 instanceof Cytosine) {
                return new Cysteine();
            } else if (c3 instanceof Adenine) {
                return new Stop();
            } else {
                return new Tryptophan();
            }
        }
    } else if (c5 instanceof Cytosine) {
        if (c4 instanceof Uracil) {
            return new Leucine();
        } else if (c4 instanceof Cytosine) {
            return new Proline();
        } else if(c4 instanceof Adenine) {
            if (c3 instanceof Uracil || c3 instanceof Cytosine) {
                return new Histidine();
            } else {
                return new Glutamine();
            }
        } else {
            return new Arginine();
        }
    } else if (c5 instanceof Adenine) {
        if (c4 instanceof Uracil) {
            if (c3 instanceof Guanine) {
                return new Methionine();
            } else {
                return new Isoleucine();
            }
        } else if(c4 instanceof Cytosine) {
            return new Threonine();
        } else if(c4 instanceof Adenine) {
            if (c3 instanceof Uracil || c3 instanceof Cytosine) {
                return new Asparagine();
            } else {
                return new Lysine();
            }
        } else {
            if (c3 instanceof Uracil || c3 instanceof Cytosine) {
                return new Serine();
            } else {
                return new Arginine();
            }
        }
    } else {
        if (c4 instanceof Uracil) {
            return new Valine();
        } else if(c4 instanceof Cytosine) {
            return new Alanine();
        } else if(c4 instanceof Adenine) {
            if (c3 instanceof Uracil || c3 instanceof Cytosine) {
                return new AsparticAcid();
            } else {
                return new GlutamicAcid();
            }
        } else {
            return new Glycine();
        }
    }
}
class Stop {
}